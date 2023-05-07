import BaseCodec from 'codecs/BaseCodec';

// Base video codec class handles general video options. Possible parameters are:
// * codec (string) - video codec name
// * bitrate (string) - stream bitrate
// * fps (integer) - frames per second
// * width (integer) - video width
// * height (integer) - video height
// * mode (string) - aspect preserval mode; one of:
//   * stretch (default) - don't preserve aspect
//   * crop - crop extra w/h
//   * pad - pad with black bars
// * src_width (int) - source width
// * src_height (int) - source height
// Aspect preserval mode is only used if both source and both destination sizes are specified. If
// source dimensions are not specified, aspect settings are ignored. If source dimensions are
// specified, and only one of the destination dimensions is specified, the other one is calculated
// to preserve the aspect ratio. Supported video codecs are: null (no video), copy (copy directly
// from the source), Theora, H.264/AVC, DivX, VP8, H.263, Flv, MPEG-1, MPEG-2
export default class VideoCodec extends BaseCodec {
  static encoderOptions = {
    codec: 'str',
    bitrate: 'int',
    fps: 'int',
    height: 'int',
    mode: 'str',
    srcWidth: 'int',
    srcHeight: 'int',
    filter: 'str',
    pixFmt: 'str',
    map: 'int',
  }

  _aspectCorrections(sw, sh, w, h, mode) {
    // If we don't have source info, we don't try to calculate corrections
    if (!sw || !sh) {
      return { w, h, filters: null };
    }

    // Original aspect ratio
    const aspect = (1.0 * sw) / (1.0 * sh);

    // If we don't have either dimension, we can't calculate
    if (!w && !h) return { w, h, filters: null };

    // If we have only one dimension, we can easily calculate the other to match the source ratio
    if (w && !h) return { w, h: Math.floor((1.0 * w) / aspect), filters: null };
    if (h && !w) return { w: Math.floor(aspect * h), h, filters: null };

    // If source and target are the same aspect ratio, we have nothing to do
    if (Math.floor(aspect * h) === w) return { w, h, filters: null };

    if (mode === 'stretch') return { w, h, filters: null };

    const targetAspect = (1.0 * w) / (1.0 * h);

    if (mode === 'crop') {
      if (targetAspect > aspect) {
        // Target is taller, need to crop top and bottom
        const h0 = Math.floor(w / aspect);
        if (!h0 > h) throw new Error(`Invalid aspect ratio (${sw}, ${sh}, ${w}, ${h})`);
        const dh = (h0 - h) / 2;
        return { w, h: h0, filters: `crop=${w}:${h}:0:${dh}` };
      }
      // Source is wider, need to crop left and right
      const w0 = Math.floor(h * aspect);
      if (!w0 > w) throw new Error(`Invalid aspect ratio (${sw}, ${sh}, ${w}, ${h})`);
      const dw = (w0 - w) / 2;
      return { w: w0, h, filters: `crop=${w}:${h}:${dw}:0` };
    }

    if (mode === 'pad') {
      if (targetAspect < aspect) {
        // Target is taller, need to pad top and bottom
        const h0 = Math.floor(w / aspect);
        if (!h0 < h) throw new Error(`Invalid aspect ratio (${sw}, ${sh}, ${w}, ${h})`);
        const dh = (h - h0) / 2;
        return { w, h: h0, filters: `pad=${w}:${h}:0:${dh}` };
      }
      // Source is wider, need to pad left and right
      const w0 = Math.floor(h * aspect);
      if (!w0 < w) throw new Error(`Invalid aspect ratio (${sw}, ${sh}, ${w}, ${h})`);
      const dw = (w - w0) / 2;
      return { w: w0, h, filters: `pad=${w}:${h}:${dw}:0` };
    }

    throw new Error(`Invalid mode specified: ${mode}`);
  }

  parseOptions(opts) {
    super.parseOptions(opts);

    let safe = this.safeOptions(opts);

    if (safe.fps && (safe.fps < 1 || safe.fps > 120)) delete safe.fps;
    if (safe.bitrate && (safe.bitrate < 16 || safe.bitrate > 15000)) delete safe.bitrate;

    let w = safe.width;
    let h = safe.height;

    if (w < 16 || w > 4000) w = null;
    if (h < 16 || h > 4000) h = null;

    let sw = safe.srcWidth;
    let sh = safe.srcHeight;

    if (!sw || !sh) sw = sh = null;

    const mode = ['stretch', 'crop', 'pad'].includes(safe.mode) ? safe.mode : 'stretch';

    const ow = w;
    const oh = h;

    const { w: neww, h: newh, filters } = this._aspectCorrections(sw, sh, w, h, mode);

    safe.width = neww;
    safe.height = newh;
    safe.aspectFilters = filters;

    if (neww && newh) safe.aspect = `${neww}:${newh}`;

    safe = self._codecSpecificParseOptions(safe);

    const finalw = safe.width;
    const finalh = safe.height;
    let finalfilters = self.aspectFilters;

    const optlist = ['-vcodec', this.constructor.ffmpegCodecName];

    if (safe.map) optlist.push('-map', `0:${safe.map}`);
    if (safe.fps) optlist.push('-r', `${safe.fps}`);
    if (safe.pixFmt) optlist.push('-pix_fmt', `${safe.pixFmt}`);
    if (safe.bitrate) optlist.push('-vb', `${this.bitrate}k`);
    if (safe.filter) {
      if (finalfilters) {
        finalfilters = `${finalfilters};${safe.filter}`;
      } else {
        finalfilters = `${safe.filter}`;
      }
    }
    if (finalw && finalh) {
      optlist.push('-s', `${finalw}x${finalh}`);
      if (ow && oh) optlist.push('-aspect', `${ow}x${oh}`);
    }

    if (finalfilters) optlist.push('-vf', finalfilters);

    optlist.push(...this._codecSpecificFfmpegOptions(safe));

    if (optlist.includes('-vf')) {
      const vf = [];
      while (optlist.includes('-vf')) {
        const idx = optlist.indexOf('-vf');
        vf.push(optlist.splice(idx + 1, 1));
        optlist.splice(idx, 1);
      }

      optlist.push('-vf', vf.join(';'));
    }

    return optlist;
  }
}

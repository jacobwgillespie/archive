import VideoCodec from 'codecs/video/VideoCodec';

// Base MPEG video codec
export default class MpegCodec extends VideoCodec {
  // Workaround for a bug in ffmpeg in which aspect ratio
  // is not correctly preserved, so we have to set it
  // again in vf; take care to put it *before* crop/pad, so
  // it uses the same adjusted dimensions as the codec itself
  // (pad/crop will adjust it further if neccessary)
  _codecSpecificParseOptions(opts) {
    const safe = { ...opts };
    const w = safe.width;
    const h = safe.height;

    if (w && h) {
      const filter = `aspect=${w}:${h}`;
      safe.aspectFilters = safe.aspectFilters
        ? `${filter},${safe.aspectFilters}`
        : filter;
    }

    return safe;
  }
}

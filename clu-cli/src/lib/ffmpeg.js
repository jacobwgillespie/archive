import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

const promiseProbe = (filename) => new Promise((resolve, reject) => {
  ffmpeg.ffprobe(filename, (err, info) => {
    if (err) return reject(err);
    return resolve(info);
  });
});

const parseStreamInfo = info => ({
  type: info.codec_type,
  index: info.index,
  codec: info.codec_name,
  codecDescription: info.codec_long_name,
  duration: info.duration,
  realFramerate: info.r_frame_rate,
  averageFramerate: info.avg_frame_rate,
  dispositionDefault: info.disposition.default === 1,
  dispositionForced: info.disposition.forced === 1,
  tags: info.tags,
  bitrate: info.bit_rate,
  channelLayout: info.channel_layout,
  channels: info.channels,
  sampleRate: info.sample_rate,
  level: info.level,
  width: info.width,
  height: info.height,
  pixelFormat: info.pix_fmt,
  attachedPic: info.disposition.attached_pic === 1,
});

const parseFormatInfo = info => {
  // Format name can be a comma separated list of valid values, so guess with file extension first
  const names = info.format_name.split(',');
  const extension = path.extname(info.filename).replace(/^\./, '');
  const name = names.includes(extension) ? extension : names[0];

  return {
    name,
    description: info.format_long_name,
    duration: info.duration,
    size: info.size,
    bitrate: info.bit_rate,
    tags: info.tags,
  };
};

const formatProbeInfo = info => ({
  streams: info.streams.map(parseStreamInfo),
  format: parseFormatInfo(info.format),
});

export const probe = async (filename) => {
  const info = await promiseProbe(filename);

  return formatProbeInfo(info);
};

import H264Codec from 'codecs/video/H264Codec';

// H.264/AVC video codec.
// @see http://ffmpeg.org/trac/ffmpeg/wiki/x264EncodingGuide
export default class H264QsvCodec extends H264Codec {
  static codecName = 'h264qsv';
  static ffmpegCodecName = 'h264_qsv';

  _codecSpecificFfmpegOptions() {
    return ['-look_ahead', '0'];
  }
}

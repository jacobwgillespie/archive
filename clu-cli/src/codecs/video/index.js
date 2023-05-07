import importedDivxCodec from 'codecs/video/DivxCodec';
import importedFlvCodec from 'codecs/video/FlvCodec';
import importedH263Codec from 'codecs/video/H263Codec';
import importedH264Codec from 'codecs/video/H264Codec';
import importedH264QsvCodec from 'codecs/video/H264QsvCodec';
import importedH265Codec from 'codecs/video/H265Codec';
import importedMpeg1Codec from 'codecs/video/Mpeg1Codec';
import importedMpeg2Codec from 'codecs/video/Mpeg2Codec';
import importedTheoraCodec from 'codecs/video/TheoraCodec';
import importedVideoCopyCodec from 'codecs/video/VideoCopyCodec';
import importedVideoNullCodec from 'codecs/video/VideoNullCodec';
import importedVp8Codec from 'codecs/video/Vp8Codec';

export const DivxCodec = importedDivxCodec;
export const FlvCodec = importedFlvCodec;
export const H263Codec = importedH263Codec;
export const H264Codec = importedH264Codec;
export const H264QsvCodec = importedH264QsvCodec;
export const H265Codec = importedH265Codec;
export const Mpeg1Codec = importedMpeg1Codec;
export const Mpeg2Codec = importedMpeg2Codec;
export const TheoraCodec = importedTheoraCodec;
export const VideoCopyCodec = importedVideoCopyCodec;
export const VideoNullCodec = importedVideoNullCodec;
export const Vp8Codec = importedVp8Codec;

export const codecs = [
  DivxCodec,
  FlvCodec,
  H263Codec,
  H264Codec,
  H264QsvCodec,
  H265Codec,
  Mpeg1Codec,
  Mpeg2Codec,
  TheoraCodec,
  VideoCopyCodec,
  VideoNullCodec,
  Vp8Codec,
];

const codecsByName = {};
codecs.forEach(c => (codecsByName[c.name] = c));

export const codecFromName = name => codecsByName[name];

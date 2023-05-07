import importedAacCodec from 'codecs/audio/AacCodec';
import importedAc3Codec from 'codecs/audio/Ac3Codec';
import importedAudioCopyCodec from 'codecs/audio/AudioCopyCodec';
import importedAudioNullCodec from 'codecs/audio/AudioNullCodec';
import importedDtsCodec from 'codecs/audio/DtsCodec';
import importedFaacCodec from 'codecs/audio/FaacCodec';
import importedFdkAacCodec from 'codecs/audio/FdkAacCodec';
import importedFlacCodec from 'codecs/audio/FlacCodec';
import importedMp2Codec from 'codecs/audio/Mp2Codec';
import importedMp3Codec from 'codecs/audio/Mp3Codec';
import importedVorbisCodec from 'codecs/audio/VorbisCodec';

export const AacCodec = importedAacCodec;
export const Ac3Codec = importedAc3Codec;
export const AudioCopyCodec = importedAudioCopyCodec;
export const AudioNullCodec = importedAudioNullCodec;
export const DtsCodec = importedDtsCodec;
export const FaacCodec = importedFaacCodec;
export const FdkAacCodec = importedFdkAacCodec;
export const FlacCodec = importedFlacCodec;
export const Mp2Codec = importedMp2Codec;
export const Mp3Codec = importedMp3Codec;
export const VorbisCodec = importedVorbisCodec;

export const codecs = [
  AacCodec,
  Ac3Codec,
  AudioCopyCodec,
  AudioNullCodec,
  DtsCodec,
  FaacCodec,
  FdkAacCodec,
  FlacCodec,
  Mp2Codec,
  Mp3Codec,
  VorbisCodec,
];

const codecsByName = {};
codecs.forEach(c => (codecsByName[c.name] = c));

export const codecFromName = name => codecsByName[name];

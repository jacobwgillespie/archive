import importedDvbSubCodec from 'codecs/subtitles/DvbSubCodec';
import importedDvdSubCodec from 'codecs/subtitles/DvdSubCodec';
import importedMovTextCodec from 'codecs/subtitles/MovTextCodec';
import importedSrtCodec from 'codecs/subtitles/SrtCodec';
import importedSsaCodec from 'codecs/subtitles/SsaCodec';
import importedSubRipCodec from 'codecs/subtitles/SubRipCodec';
import importedSubtitleCopyCodec from 'codecs/subtitles/SubtitleCopyCodec';
import importedSubtitleNullCodec from 'codecs/subtitles/SubtitleNullCodec';
import importedWebVttCodec from 'codecs/subtitles/WebVttCodec';

export const DvbSubCodec = importedDvbSubCodec;
export const DvdSubCodec = importedDvdSubCodec;
export const MovTextCodec = importedMovTextCodec;
export const SrtCodec = importedSrtCodec;
export const SsaCodec = importedSsaCodec;
export const SubRipCodec = importedSubRipCodec;
export const SubtitleCopyCodec = importedSubtitleCopyCodec;
export const SubtitleNullCodec = importedSubtitleNullCodec;
export const WebVttCodec = importedWebVttCodec;

export const codecs = [
  DvbSubCodec,
  DvdSubCodec,
  MovTextCodec,
  SrtCodec,
  SsaCodec,
  SubRipCodec,
  SubtitleCopyCodec,
  SubtitleNullCodec,
  WebVttCodec,
];

const codecsByName = {};
codecs.forEach(c => (codecsByName[c.name] = c));

export const codecFromName = name => codecsByName[name];

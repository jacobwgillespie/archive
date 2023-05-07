import importedAviFormat from 'formats/AviFormat';
import importedFlvFormat from 'formats/FlvFormat';
import importedMkvFormat from 'formats/MkvFormat';
import importedMovFormat from 'formats/MovFormat';
import importedMp3Format from 'formats/Mp3Format';
import importedMp4Format from 'formats/Mp4Format';
import importedMpegFormat from 'formats/MpegFormat';
import importedOggFormat from 'formats/OggFormat';
import importedSrtFormat from 'formats/SrtFormat';
import importedSsaFormat from 'formats/SsaFormat';
import importedUnknownFormat from 'formats/UnknownFormat';
import importedWebmFormat from 'formats/WebmFormat';
import importedWebVttFormat from 'formats/WebVttFormat';

export const AviFormat = importedAviFormat;
export const FlvFormat = importedFlvFormat;
export const MkvFormat = importedMkvFormat;
export const MovFormat = importedMovFormat;
export const Mp3Format = importedMp3Format;
export const Mp4Format = importedMp4Format;
export const MpegFormat = importedMpegFormat;
export const OggFormat = importedOggFormat;
export const SrtFormat = importedSrtFormat;
export const SsaFormat = importedSsaFormat;
export const UnknownFormat = importedUnknownFormat;
export const WebmFormat = importedWebmFormat;
export const WebVttFormat = importedWebVttFormat;

const formats = [
  AviFormat,
  FlvFormat,
  MkvFormat,
  MovFormat,
  Mp3Format,
  Mp4Format,
  MpegFormat,
  OggFormat,
  SrtFormat,
  SsaFormat,
  WebmFormat,
  WebVttFormat,
];

const formatsByName = {};
formats.forEach(f => (formatsByName[f.formatName] = f));

const formatsByFfmpegName = {};
formats.forEach(f => (formatsByFfmpegName[f.ffmpegFormatName] = f));

export const formatFromInfo = info => {
  const Format = formatsByFfmpegName[info.name] || formatsByName[info.name];
  return Format ? new Format(info) : new UnknownFormat(info);
};

import { codecs as importedAudio } from 'codecs/audio';
import { codecs as importedSubtitles } from 'codecs/subtitles';
import { codecs as importedVideo } from 'codecs/video';

export const audio = importedAudio;
export const subtitles = importedSubtitles;
export const video = importedVideo;

export const codecs = [
  ...audio,
  ...subtitles,
  ...video,
];

const codecsByName = {};
codecs.forEach(c => (codecsByName[c.codecName] = c));

export const codecFromName = name => codecsByName[name];

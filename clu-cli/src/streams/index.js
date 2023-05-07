import importedAudioStream from 'streams/AudioStream';
import importedSubtitleStream from 'streams/SubtitleStream';
import importedUnknownStream from 'streams/UnknownStream';
import importedVideoStream from 'streams/VideoStream';

export const AudioStream = importedAudioStream;
export const SubtitleStream = importedSubtitleStream;
export const UnknownStream = importedUnknownStream;
export const VideoStream = importedVideoStream;

export const streamFromInfo = (info) => {
  switch (info.type) {
    case 'audio':
      return new AudioStream(info);

    case 'subtitle':
      return new SubtitleStream(info);

    case 'video':
      return new VideoStream(info);

    default:
      return new UnknownStream(info);
  }
};

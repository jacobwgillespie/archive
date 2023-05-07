import Video from 'Video';

export default class FileCollector {
  constructor(filename) {
    this.filename = filename;
  }

  collect(state) {
    return {
      ...state,
      items: [
        ...state.items,
        new Video(this.filename),
      ],
    };
  }
}

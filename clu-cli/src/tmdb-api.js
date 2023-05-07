export class Core {
  updateConfiguration() {}
}

export class Movies extends Core {
  constructor({ title = '', limit = false, language }) {
    this.title = title;
    this.limit = limit;
    this.language = language;
  }
}

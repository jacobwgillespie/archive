export default class Executor {
  constructor(config) {
    this.config = config;
    this.state = {
      items: [],
    };
  }

  async collect(...args) {
    await this.callPlugin('collect', ...args);
  }

  async plan(...args) {
    await this.callPlugin('plan', ...args);
  }

  async execute(...args) {
    await this.callPlugin('execute', ...args);
  }

  async callPlugin(method, ...args) {
    await Promise.all(this.config.plugins.map(async plugin => {
      if (plugin[method]) this.state = await plugin[method](this.state, args);
      return true;
    }));
  }
}

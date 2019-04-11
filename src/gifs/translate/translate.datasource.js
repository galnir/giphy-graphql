import { RESTDataSource } from 'apollo-datasource-rest';

export class GifsTranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getTranslateGif(s, weirdness = 0) {
    const data = await this.get('translate', {
      api_key: process.env.GIPHY_KEY,
      s,
      weirdness
    });
    return data;
  }
}

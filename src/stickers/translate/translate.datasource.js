import { RESTDataSource } from 'apollo-datasource-rest';

export class StickersTranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getTranslateSticker(query) {
    const data = await this.get('translate', {
      api_key: process.env.GIPHY_KEY,
      s: query
    });
    return data.data;
  }
}

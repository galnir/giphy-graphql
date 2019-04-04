import { RESTDataSource } from 'apollo-datasource-rest';

export class StickersRandomAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getRandomSticker(tag = '', rating = 'g') {
    const data = await this.get('random', {
      api_key: process.env.GIPHY_KEY,
      tag,
      rating
    });
    return data.data;
  }
}

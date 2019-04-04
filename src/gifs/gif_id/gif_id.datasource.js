import { RESTDataSource } from 'apollo-datasource-rest';

export class GifIdAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs`;
  }

  async getGifById(id) {
    const data = await this.get(id, {
      api_key: process.env.GIPHY_KEY
    });
    return data.data;
  }
}

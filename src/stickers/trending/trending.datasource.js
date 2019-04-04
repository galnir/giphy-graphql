import { RESTDataSource } from 'apollo-datasource-rest';

export class StickersTrendingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getTrendingStickers(limit = 25, rating = 'g') {
    const data = await this.get('trending', {
      api_key: process.env.GIPHY_KEY,
      limit,
      rating
    });
    return data.data;
  }
}

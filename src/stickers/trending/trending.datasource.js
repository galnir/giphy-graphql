import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class StickersTrendingAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getTrendingStickers(limit = 25, rating = 'g') {
    const data = await this.get('trending', {
      api_key: GIPHY_KEY,
      limit,
      rating
    });
    return data.data;
  }
}

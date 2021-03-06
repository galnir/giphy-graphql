import { RESTDataSource } from 'apollo-datasource-rest';

export class StickersSearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getASticker(query, limit = 25, offset = 0, rating = 'g', lang = 'en') {
    const data = await this.get('search', {
      api_key: process.env.GIPHY_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    });
    return data;
  }

  async getStickers(query, limit = 25, offset = 0, rating = 'g', lang = 'en') {
    const data = await this.get('search', {
      api_key: process.env.GIPHY_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    });
    return data;
  }
}

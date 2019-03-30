import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class GifsSearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getAGif(query, limit = 25, offset = 0, rating = 'g', lang = 'en') {
    const data = await this.get('search', {
      api_key: GIPHY_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    });
    return data.data[Math.floor(Math.random() * limit)];
  }

  async getGifs(query, limit = 25, offset = 0, rating = 'g', lang = 'en') {
    const data = await this.get('search', {
      api_key: GIPHY_KEY,
      q: query,
      limit,
      offset,
      rating,
      lang
    });
    return data.data;
  }
}

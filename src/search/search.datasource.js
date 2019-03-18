import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../config.json';

export class GiphySearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getAGif(query) {
    const data = await this.get('search', {
      api_key: GIPHY_KEY,
      q: query,
      limit: 5
    });
    return data.data[Math.floor(Math.random() * 5)];
  }

  async getGifs(query) {
    const data = await this.get('search', {
      api_key: GIPHY_KEY,
      q: query,
      limit: 5
    });
    return data.data;
  }
}

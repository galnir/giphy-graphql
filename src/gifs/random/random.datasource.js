import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class GifsRandomAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getRandomGif(query) {
    const data = await this.get('random', {
      api_key: GIPHY_KEY,
      tag: query
    });
    return data.data;
  }
}

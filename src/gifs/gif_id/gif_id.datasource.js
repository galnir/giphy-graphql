import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class GifsIdAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs`;
  }

  async getGifById(id) {
    const data = await this.get(id, {
      api_key: GIPHY_KEY
    });
    return data.data;
  }
}

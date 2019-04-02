import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class GifsIdAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs`;
  }

  async getGifsByIDs(ids) {
    const data = await this.get(ids, {
      api_key: GIPHY_KEY
    });
    return data.data;
  }
}

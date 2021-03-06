import { RESTDataSource } from 'apollo-datasource-rest';

export class RandomIdAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1`;
  }

  async getRandomId() {
    const data = await this.get('randomid', {
      api_key: process.env.GIPHY_KEY // The key needs to be a PRODUCTION key! the basic dev is not enough
    });
    return data.data;
  }
}

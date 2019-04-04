import { RESTDataSource } from 'apollo-datasource-rest';

export class GifsIdAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs`;
  }

  async getGifsByIDs(ids) {
    const data = await this.get(ids, {
      api_key: process.env.GIPHY_KEY
    });
    return data.data;
  }
}

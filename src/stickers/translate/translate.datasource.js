import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class StickersTranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/stickers/`;
  }

  async getTranslateSticker(query) {
    const data = await this.get('translate', {
      api_key: GIPHY_KEY,
      s: query
    });
    return data.data;
  }
}

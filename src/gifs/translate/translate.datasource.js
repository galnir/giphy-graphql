import { RESTDataSource } from 'apollo-datasource-rest';
import { GIPHY_KEY } from '../../../config.json';

export class GifsTranslateAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.giphy.com/v1/gifs/`;
  }

  async getTranslateGif(s, weirdness = 0) {
    const data = await this.get('translate', {
      api_key: GIPHY_KEY,
      s,
      weirdness
    });
    return data.data;
  }
}

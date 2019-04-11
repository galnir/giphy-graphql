export const gifTranslateResolvers = {
  GifData: {
    gifData(data) {
      return data.data;
    },
    pagination() {
      return null; // There is no pagination in translate data
    }
  },
  Query: {
    translateGif: (root, { s, weirdness }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(s, weirdness)
  }
};

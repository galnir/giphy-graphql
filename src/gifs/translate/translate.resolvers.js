export const gifTranslateResolvers = {
  GifData: {
    pagination() {
      return null; // There is no pagination in translate data
    }
  },
  Query: {
    translateGif: (root, { s, weirdness }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(s, weirdness)
  }
};

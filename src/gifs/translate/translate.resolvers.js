export const gifTranslateResolvers = {
  Gif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    translateGif: (root, { s, weirdness }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(s, weirdness)
  }
};

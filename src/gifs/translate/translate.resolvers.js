export const gifTranslateResolvers = {
  Gif: {
    images(data) {
      return data.images.original;
    },
    user(data) {
      if (!data.user) return null;
      else return data.user;
    }
  },
  Query: {
    translateGif: (root, { s, weirdness }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(s, weirdness)
  }
};

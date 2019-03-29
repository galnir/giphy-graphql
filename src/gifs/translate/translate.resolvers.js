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
    getTranslateGif: (root, { query }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(query)
  }
};

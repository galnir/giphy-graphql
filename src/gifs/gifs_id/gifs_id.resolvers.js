export const gifsIdResolvers = {
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
    gifsByID: (root, { ids }, { dataSources }) =>
      dataSources.GifsIdAPI.getGifsByIDs(ids)
  }
};

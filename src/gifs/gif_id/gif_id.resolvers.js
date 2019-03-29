export const gifIdResolvers = {
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
    getGifById: (root, { id }, { dataSources }) =>
      dataSources.GifsIdAPI.getGifById(id)
  }
};

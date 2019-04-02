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
    gifByID: (root, { id }, { dataSources }) =>
      dataSources.GifIdAPI.getGifById(id)
  }
};

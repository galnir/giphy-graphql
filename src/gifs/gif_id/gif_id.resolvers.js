export const gifIdResolvers = {
  Gif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    gifByID: (root, { id }, { dataSources }) =>
      dataSources.GifIdAPI.getGifById(id)
  }
};

export const gifsIdResolvers = {
  Gif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    gifsByID: (root, { ids }, { dataSources }) =>
      dataSources.GifsIdAPI.getGifsByIDs(ids)
  }
};

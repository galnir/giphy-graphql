export const gifsIdResolvers = {
  Query: {
    gifsByID: (root, { ids }, { dataSources }) =>
      dataSources.GifsIdAPI.getGifsByIDs(ids)
  }
};

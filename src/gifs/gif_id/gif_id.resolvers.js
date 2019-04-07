export const gifIdResolvers = {
  Query: {
    gifByID: (root, { id }, { dataSources }) =>
      dataSources.GifIdAPI.getGifById(id)
  }
};

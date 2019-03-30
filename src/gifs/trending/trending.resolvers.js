export const gifTrendingResolvers = {
  Query: {
    getTrendingGifs: (root, { limit, offset, rating }, { dataSources }) =>
      dataSources.GifsTrendingAPI.getTrendingGifs(limit, offset, rating)
  }
};

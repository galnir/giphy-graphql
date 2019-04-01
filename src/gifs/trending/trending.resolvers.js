export const gifTrendingResolvers = {
  Query: {
    trendingGifs: (root, { limit, offset, rating }, { dataSources }) =>
      dataSources.GifsTrendingAPI.getTrendingGifs(limit, offset, rating)
  }
};

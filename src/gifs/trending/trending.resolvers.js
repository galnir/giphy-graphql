export const gifTrendingResolvers = {
  Query: {
    getTrendingGifs: (root, _, { dataSources }) =>
      dataSources.GifsTrendingAPI.getTrendingGifs()
  }
};

export const trendingResolvers = {
  Query: {
    getTrendingGifs: (root, _, { dataSources }) =>
      dataSources.GifsTrendingAPI.getTrendingGifs()
  }
};

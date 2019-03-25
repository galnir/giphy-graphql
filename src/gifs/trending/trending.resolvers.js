export const trendingResolvers = {
  TrendingGif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    getTrendingGifs: (root, _, { dataSources }) =>
      dataSources.GifsTrendingAPI.getTrendingGifs()
  }
};

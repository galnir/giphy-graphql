export const stickerTrendingResolvers = {
  Query: {
    trendingStickers: (root, { limit, rating }, { dataSources }) =>
      dataSources.StickersTrendingAPI.getTrendingStickers(limit, rating)
  }
};

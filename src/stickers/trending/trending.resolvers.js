export const stickerTrendingResolvers = {
  Sticker: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    trendingStickers: (root, { limit, rating }, { dataSources }) =>
      dataSources.StickersTrendingAPI.getTrendingStickers(limit, rating)
  }
};

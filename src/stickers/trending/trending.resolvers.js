export const stickerTrendingResolvers = {
  Sticker: {
    images(data) {
      return data.images.original;
    },
    user(data) {
      if (!data.user) return null;
      else return data.user;
    }
  },
  Query: {
    trendingStickers: (root, { limit, rating }, { dataSources }) =>
      dataSources.StickersTrendingAPI.getTrendingStickers(limit, rating)
  }
};

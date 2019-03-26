export const stickerTrendingResolvers = {
  Sticker: {
    images(data) {
      return data.images.original;
    },
    user(data) {
      if (!user) return null;
      else return data.user;
    }
  },
  Query: {
    getTrendingStickers: (root, _, { dataSources }) =>
      dataSources.StickersTrendingAPI.getTrendingStickers()
  }
};

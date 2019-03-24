export const stickerSearchResolvers = {
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
    getASticker: (root, { query }, { dataSources }) =>
      dataSources.StickerSearchAPI.getASticker(query),
    getStickers: (root, { query }, { dataSources }) =>
      dataSources.StickerSearchAPI.getStickers(query)
  }
};

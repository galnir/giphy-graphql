export const stickerSearchResolvers = {
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
    getASticker: (root, { query }, { dataSources }) =>
      dataSources.StickersSearchAPI.getASticker(query),
    getStickers: (root, { query }, { dataSources }) =>
      dataSources.StickersSearchAPI.getStickers(query)
  }
};

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
    sticker: (root, { query, offset, rating, lang }, { dataSources }) =>
      dataSources.StickersSearchAPI.getASticker(query, offset, rating, lang),
    stickers: (root, { query, limit, offset, rating, lang }, { dataSources }) =>
      dataSources.StickersSearchAPI.getStickers(
        query,
        limit,
        offset,
        rating,
        lang
      )
  }
};

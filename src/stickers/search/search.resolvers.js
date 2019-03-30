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
    getASticker: (root, { query, offset, rating, lang }, { dataSources }) =>
      dataSources.StickersSearchAPI.getASticker(query, offset, rating, lang),
    getStickers: (
      root,
      { query, limit, offset, rating, lang },
      { dataSources }
    ) =>
      dataSources.StickersSearchAPI.getStickers(
        query,
        limit,
        offset,
        rating,
        lang
      )
  }
};

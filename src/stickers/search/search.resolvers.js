export const stickerSearchResolvers = {
  StickerData: {
    stickerData(data) {
      return data.data[Math.floor(Math.random() * data.pagination.count)];
    }
  },
  StickersData: {
    stickersData(data) {
      return data.data;
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

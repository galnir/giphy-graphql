export const stickerSearchResolvers = {
  StickerData: {
    stickerData(data) {
      /*
      translate sticker does not have a pagination object, that's why we
      check if pagination exists so it won't break translate sticker 
      */
      let count = data.pagination ? data.pagination.count : 0;
      if (count)
        return data.data[Math.floor(Math.random() * data.pagination.count)];
      else return data.data;
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

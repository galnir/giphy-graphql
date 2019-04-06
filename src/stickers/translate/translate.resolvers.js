export const stickerTranslateResolvers = {
  Sticker: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    translateSticker: (root, { query }, { dataSources }) =>
      dataSources.StickersTranslateAPI.getTranslateSticker(query)
  }
};

export const stickerTranslateResolvers = {
  Query: {
    translateSticker: (root, { query }, { dataSources }) =>
      dataSources.StickersTranslateAPI.getTranslateSticker(query)
  }
};

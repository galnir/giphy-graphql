export const stickerTranslateResolvers = {
  StickerData: {
    stickerData(data) {
      return data.data;
    },
    pagination() {
      return null; // There is no pagination object in translate data
    }
  },
  Query: {
    translateSticker: (root, { query }, { dataSources }) =>
      dataSources.StickersTranslateAPI.getTranslateSticker(query)
  }
};

export const stickerTranslateResolvers = {
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
    getTranslateSticker: (root, { query }, { dataSources }) =>
      dataSources.StickersTranslateAPI.getTranslateSticker(query)
  }
};

export const stickerRandomResolvers = {
  RandomSticker: {
    images(data) {
      return data.images.original;
    },
    user(data) {
      return data.user;
    }
  },
  Query: {
    getRandomSticker: (root, { tag, rating }, { dataSources }) =>
      dataSources.StickersRandomAPI.getRandomSticker(tag, rating)
  }
};

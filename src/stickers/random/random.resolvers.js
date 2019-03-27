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
    getRandomSticker: (root, { query }, { dataSources }) =>
      dataSources.StickersRandomAPI.getRandomSticker(query)
  }
};

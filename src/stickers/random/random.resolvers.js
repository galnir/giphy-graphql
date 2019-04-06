export const stickerRandomResolvers = {
  RandomSticker: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    randomSticker: (root, { tag, rating }, { dataSources }) =>
      dataSources.StickersRandomAPI.getRandomSticker(tag, rating)
  }
};

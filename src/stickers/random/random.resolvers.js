export const stickerRandomResolvers = {
  Query: {
    randomSticker: (root, { tag, rating }, { dataSources }) =>
      dataSources.StickersRandomAPI.getRandomSticker(tag, rating)
  }
};

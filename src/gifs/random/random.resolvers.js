export const gifRandomResolvers = {
  RandomGif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    randomGif: (root, { tag, rating }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(tag, rating)
  }
};

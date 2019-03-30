export const gifRandomResolvers = {
  RandomGif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    getRandomGif: (root, { tag, rating }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(tag, rating)
  }
};

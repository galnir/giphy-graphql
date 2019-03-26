export const gifRandomResolvers = {
  RandomGif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    getRandomGif: (root, { query }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(query)
  }
};

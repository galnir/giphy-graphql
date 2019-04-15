export const gifRandomResolvers = {
  RandomGifData: {
    gifData(data) {
      return data.data;
    }
  },
  Query: {
    randomGif: (root, { tag, rating }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(tag, rating)
  }
};

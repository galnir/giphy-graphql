export const gifRandomResolvers = {
  Query: {
    randomGif: (root, { tag, rating }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(tag, rating)
  }
};

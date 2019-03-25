export const randomResolvers = {
  Query: {
    getRandomGif: (root, { query }, { dataSources }) =>
      dataSources.GifsRandomAPI.getRandomGif(query)
  }
};

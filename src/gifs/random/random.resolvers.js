export const randomResolvers = {
  Query: {
    getRandomGif: (root, { query }, { dataSources }) =>
      dataSources.GiphyRandomAPI.getRandomGif(query)
  }
};

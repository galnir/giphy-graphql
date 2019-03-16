export const resolvers = {
  Gif: {
    images(data) {
      return data.images.original;
    },
    user(data) {
      if (!data.user) return null;
      else return data.user;
    }
  },
  Query: {
    gif: (root, { query }, { dataSources }) =>
      dataSources.GiphyAPI.getAGif(query),
    gifs: (root, { query }, { dataSources }) =>
      dataSources.GiphyAPI.getGifs(query)
  }
};

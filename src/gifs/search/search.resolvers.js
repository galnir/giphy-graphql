export const gifSearchResolvers = {
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
      dataSources.GifsSearchAPI.getAGif(query),
    gifs: (root, { query }, { dataSources }) =>
      dataSources.GifsSearchAPI.getGifs(query)
  }
};

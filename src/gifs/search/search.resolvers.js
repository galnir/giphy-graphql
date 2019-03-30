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
    gif: (root, { query, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getAGif(query, offset, rating, lang),
    gifs: (root, { query, limit, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getGifs(query, limit, offset, rating, lang)
  }
};

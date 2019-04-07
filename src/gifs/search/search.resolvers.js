export const gifSearchResolvers = {
  Query: {
    gif: (root, { query, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getAGif(query, offset, rating, lang),
    gifs: (root, { query, limit, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getGifs(query, limit, offset, rating, lang)
  }
};

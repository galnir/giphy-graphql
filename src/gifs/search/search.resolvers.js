export const gifSearchResolvers = {
  GifData: {
    gifData(data) {
      return data.data[Math.floor(Math.random() * data.pagination.count)];
    }
  },
  GifsData: {
    gifsData(data) {
      return data.data;
    }
  },
  Query: {
    gif: (root, { query, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getAGif(query, offset, rating, lang),
    gifs: (root, { query, limit, offset, rating, lang }, { dataSources }) =>
      dataSources.GifsSearchAPI.getGifs(query, limit, offset, rating, lang)
  }
};

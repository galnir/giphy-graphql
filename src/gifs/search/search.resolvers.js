export const gifSearchResolvers = {
  GifData: {
    gifData(data) {
      /*
      This checks if data has a pagination object, because when we recieve
      the data of a translated gif, it does not have a pagination property,
      and thus data.pagination.count doesn't exist.
      So if it has a pagination object, return 1 of the 25 gifs that come back
      (search gif case), else it is a translated gif and just return the data,
      because we only get back 1 gif
      */
      let count = data.pagination ? data.pagination.count : 0;
      if (count)
        return data.data[Math.floor(Math.random() * data.pagination.count)];
      else return data.data;
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

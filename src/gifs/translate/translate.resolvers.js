export const translateResolvers = {
  TranslateGif: {
    images(data) {
      return data.images.original_still;
    }
  },
  Query: {
    getTranslateGif: (root, { query }, { dataSources }) =>
      dataSources.GiphyTranslateAPI.getTranslateGif(query)
  }
};
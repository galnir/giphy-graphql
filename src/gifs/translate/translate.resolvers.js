export const translateResolvers = {
  TranslateGif: {
    images(data) {
      return data.images.original;
    }
  },
  Query: {
    getTranslateGif: (root, { query }, { dataSources }) =>
      dataSources.GifsTranslateAPI.getTranslateGif(query)
  }
};

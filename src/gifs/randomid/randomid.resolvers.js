export const randomIdResolvers = {
  Query: {
    randomId: (root, { ids }, { dataSources }) =>
      dataSources.RandomIdAPI.getRandomId()
  }
};

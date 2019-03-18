const { ApolloServer } = require('apollo-server');
const { GiphySearchAPI } = require('./search/search.datasource');
const { GiphyTrendingAPI } = require('./trending/trending.datasource');
const { searchTypeDefs } = require('./search/search.typeDefs');
const { searchResolvers } = require('./search/search.resolvers');
const { trendingTypeDefs } = require('./trending/trending.typeDefs');
const { trendingResolvers } = require('./trending/trending.resolvers');
const merge = require('lodash.merge');

const typeDefs = [searchTypeDefs, trendingTypeDefs];

const resolvers = merge({}, searchResolvers, trendingResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GiphySearchAPI: new GiphySearchAPI(),
    GiphyTrendingAPI: new GiphyTrendingAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

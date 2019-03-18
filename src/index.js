import { ApolloServer } from 'apollo-server';
import { GiphySearchAPI } from './search/search.datasource';
import { GiphyTrendingAPI } from './trending/trending.datasource';
import { searchTypeDefs } from './search/search.typeDefs';
import { searchResolvers } from './search/search.resolvers';
import { trendingTypeDefs } from './trending/trending.typeDefs';
import { trendingResolvers } from './trending/trending.resolvers';
import merge from 'lodash.merge';

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

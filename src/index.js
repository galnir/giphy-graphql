import { ApolloServer } from 'apollo-server';
import { GiphySearchAPI } from './search/search.datasource';
import { GiphyTrendingAPI } from './trending/trending.datasource';
import { GiphyRandomAPI } from './random/random.datasource';
import { searchTypeDefs } from './search/search.typeDefs';
import { searchResolvers } from './search/search.resolvers';
import { trendingTypeDefs } from './trending/trending.typeDefs';
import { trendingResolvers } from './trending/trending.resolvers';
import { randomTypeDefs } from './random/random.typeDefs';
import { randomResolvers } from './random/random.resolvers';
import merge from 'lodash.merge';

const typeDefs = [searchTypeDefs, trendingTypeDefs, randomTypeDefs];

const resolvers = merge(
  {},
  searchResolvers,
  trendingResolvers,
  randomResolvers
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GiphySearchAPI: new GiphySearchAPI(),
    GiphyTrendingAPI: new GiphyTrendingAPI(),
    GiphyRandomAPI: new GiphyRandomAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

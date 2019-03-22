import { ApolloServer } from 'apollo-server';
import { GiphySearchAPI } from './search/search.datasource';
import { GiphyTrendingAPI } from './trending/trending.datasource';
import { GiphyRandomAPI } from './random/random.datasource';
import { GiphyTranslateAPI } from './translate/translate.datasource';
import { searchTypeDefs } from './search/search.typeDefs';
import { searchResolvers } from './search/search.resolvers';
import { trendingTypeDefs } from './trending/trending.typeDefs';
import { trendingResolvers } from './trending/trending.resolvers';
import { randomTypeDefs } from './random/random.typeDefs';
import { randomResolvers } from './random/random.resolvers';
import { translateTypeDefs } from './translate/translate.typeDefs';
import { translateResolvers } from './translate/translate.resolvers';
import merge from 'lodash.merge';

const typeDefs = [
  searchTypeDefs,
  trendingTypeDefs,
  randomTypeDefs,
  translateTypeDefs
];

const resolvers = merge(
  {},
  searchResolvers,
  trendingResolvers,
  randomResolvers,
  translateResolvers
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GiphySearchAPI: new GiphySearchAPI(),
    GiphyTrendingAPI: new GiphyTrendingAPI(),
    GiphyRandomAPI: new GiphyRandomAPI(),
    GiphyTranslateAPI: new GiphyTranslateAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

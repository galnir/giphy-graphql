import { ApolloServer } from 'apollo-server';
import { GiphySearchAPI } from './gifs/search/search.datasource';
import { GiphyTrendingAPI } from './gifs/trending/trending.datasource';
import { GiphyRandomAPI } from './gifs/random/random.datasource';
import { GiphyTranslateAPI } from './gifs/translate/translate.datasource';
import { typeDefs } from './gifs/index';
import { resolvers } from './gifs/index';

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

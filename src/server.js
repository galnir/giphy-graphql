import { ApolloServer } from 'apollo-server';
import { GiphySearchAPI } from './gifs/search/search.datasource';
import { GiphyTrendingAPI } from './gifs/trending/trending.datasource';
import { GiphyRandomAPI } from './gifs/random/random.datasource';
import { GiphyTranslateAPI } from './gifs/translate/translate.datasource';
import { GifsTypeDefs } from './gifs/index';
import { GifResolvers } from './gifs/index';
import { StickerSearchAPI } from './stickers/search/search.datasource';
import { stickerTypeDefs } from './stickers/index';
import { stickerResolvers } from './stickers/index';
import merge from 'lodash.merge';

const typeDefs = [...GifsTypeDefs, ...stickerTypeDefs];
const resolvers = merge({}, GifResolvers, stickerResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GiphySearchAPI: new GiphySearchAPI(),
    GiphyTrendingAPI: new GiphyTrendingAPI(),
    GiphyRandomAPI: new GiphyRandomAPI(),
    GiphyTranslateAPI: new GiphyTranslateAPI(),
    StickerSearchAPI: new StickerSearchAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

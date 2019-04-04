import { ApolloServer } from 'apollo-server';
import { GifsSearchAPI } from './gifs/search/search.datasource';
import { GifsTrendingAPI } from './gifs/trending/trending.datasource';
import { GifsRandomAPI } from './gifs/random/random.datasource';
import { GifsTranslateAPI } from './gifs/translate/translate.datasource';
import { GifIdAPI } from './gifs/gif_id/gif_id.datasource';
import { GifsIdAPI } from './gifs/gifs_id/gifs_id.datasource';
import { RandomIdAPI } from './gifs/randomid/randomid.datasource';
import { GifsTypeDefs } from './gifs/index';
import { GifResolvers } from './gifs/index';
import { stickerTypeDefs } from './stickers/index';
import { stickerResolvers } from './stickers/index';
import { StickersSearchAPI } from './stickers/search/search.datasource';
import { StickersTrendingAPI } from './stickers/trending/trending.datasource';
import { StickersRandomAPI } from './stickers/random/random.datasource';
import { StickersTranslateAPI } from './stickers/translate/translate.datasource';
import merge from 'lodash.merge';

require('dotenv').config(); // enabling the dotenv package

const typeDefs = [...GifsTypeDefs, ...stickerTypeDefs];
const resolvers = merge({}, GifResolvers, stickerResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GifsSearchAPI: new GifsSearchAPI(),
    GifsTrendingAPI: new GifsTrendingAPI(),
    GifsRandomAPI: new GifsRandomAPI(),
    GifsTranslateAPI: new GifsTranslateAPI(),
    GifIdAPI: new GifIdAPI(),
    GifsIdAPI: new GifsIdAPI(),
    RandomIdAPI: new RandomIdAPI(),
    StickersSearchAPI: new StickersSearchAPI(),
    StickersTrendingAPI: new StickersTrendingAPI(),
    StickersRandomAPI: new StickersRandomAPI(),
    StickersTranslateAPI: new StickersTranslateAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

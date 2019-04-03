import { gifSearchTypeDefs } from './search/search.typeDefs';
import { gifSearchResolvers } from './search/search.resolvers';
import { gifTrendingTypeDefs } from './trending/trending.typeDefs';
import { gifTrendingResolvers } from './trending/trending.resolvers';
import { gifRandomTypeDefs } from './random/random.typeDefs';
import { gifRandomResolvers } from './random/random.resolvers';
import { gifTranslateTypeDefs } from './translate/translate.typeDefs';
import { gifTranslateResolvers } from './translate/translate.resolvers';
import { gifIdTypeDefs } from './gif_id/gif_id.typeDefs';
import { gifIdResolvers } from './gif_id/gif_id.resolvers';
import { gifsIdTypeDefs } from './gifs_id/gifs_id.typeDefs';
import { gifsIdResolvers } from './gifs_id/gifs_id.resolvers';
import { randomIdTypeDefs } from './randomid/randomid.typeDefs';
import { randomIdResolvers } from './randomid/randomid.resolvers';
import merge from 'lodash.merge';

export const GifsTypeDefs = [
  gifSearchTypeDefs,
  gifTrendingTypeDefs,
  gifRandomTypeDefs,
  gifTranslateTypeDefs,
  gifIdTypeDefs,
  gifsIdTypeDefs,
  randomIdTypeDefs
];

export const GifResolvers = merge(
  {},
  gifSearchResolvers,
  gifTrendingResolvers,
  gifRandomResolvers,
  gifTranslateResolvers,
  gifIdResolvers,
  gifsIdResolvers,
  randomIdResolvers
);

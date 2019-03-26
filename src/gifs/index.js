import { gifSearchTypeDefs } from './search/search.typeDefs';
import { gifSearchResolvers } from './search/search.resolvers';
import { gifTrendingTypeDefs } from './trending/trending.typeDefs';
import { gifTrendingResolvers } from './trending/trending.resolvers';
import { gifRandomTypeDefs } from './random/random.typeDefs';
import { gifRandomResolvers } from './random/random.resolvers';
import { gifTranslateTypeDefs } from './translate/translate.typeDefs';
import { gifTranslateResolvers } from './translate/translate.resolvers';
import merge from 'lodash.merge';

export const GifsTypeDefs = [
  gifSearchTypeDefs,
  gifTrendingTypeDefs,
  gifRandomTypeDefs,
  gifTranslateTypeDefs
];

export const GifResolvers = merge(
  {},
  gifSearchResolvers,
  gifTrendingResolvers,
  gifRandomResolvers,
  gifTranslateResolvers
);

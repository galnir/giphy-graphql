import { searchTypeDefs } from './search/search.typeDefs';
import { searchResolvers } from './search/search.resolvers';
import { trendingTypeDefs } from './trending/trending.typeDefs';
import { trendingResolvers } from './trending/trending.resolvers';
import { randomTypeDefs } from './random/random.typeDefs';
import { randomResolvers } from './random/random.resolvers';
import { translateTypeDefs } from './translate/translate.typeDefs';
import { translateResolvers } from './translate/translate.resolvers';
import merge from 'lodash.merge';

export const GifsTypeDefs = [
  searchTypeDefs,
  trendingTypeDefs,
  randomTypeDefs,
  translateTypeDefs
];

export const GifResolvers = merge(
  {},
  searchResolvers,
  trendingResolvers,
  randomResolvers,
  translateResolvers
);

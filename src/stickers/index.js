import { stickerSearchTypeDefs } from './search/search.typeDefs';
import { stickerSearchResolvers } from './search/search.resolvers';
import { stickerTrendingTypeDefs } from './trending/trending.typeDefs';
import { stickerTrendingResolvers } from './trending/trending.resolvers';
import { stickerRandomTypeDefs } from './random/random.typeDefs';
import { stickerRandomResolvers } from './random/random.resolvers';
import merge from 'lodash.merge';

export const stickerTypeDefs = [
  stickerSearchTypeDefs,
  stickerTrendingTypeDefs,
  stickerRandomTypeDefs
];

export const stickerResolvers = merge(
  {},
  stickerSearchResolvers,
  stickerTrendingResolvers,
  stickerRandomResolvers
);

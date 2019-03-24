import { stickerSearchTypeDefs } from './search/search.typeDefs';
import { stickerSearchResolvers } from './search/search.resolvers';
import merge from 'lodash.merge';

export const stickerTypeDefs = [stickerSearchTypeDefs];

export const stickerResolvers = merge({}, stickerSearchResolvers);

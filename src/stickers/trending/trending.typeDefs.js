import { gql } from 'apollo-server';

export const stickerTrendingTypeDefs = gql`
  extend type Query {
    getTrendingStickers(limit: Int, rating: String): [Sticker]!
  }
`;

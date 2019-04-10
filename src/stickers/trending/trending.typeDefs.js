import { gql } from 'apollo-server';

export const stickerTrendingTypeDefs = gql`
  extend type Query {
    trendingStickers(limit: Int, rating: String): StickersData!
  }
`;

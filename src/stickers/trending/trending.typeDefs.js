import { gql } from 'apollo-server';

export const stickerTrendingTypeDefs = gql`
  input TrendingStickersInput {
    limit: Int
    rating: String
  }
  extend type Query {
    getTrendingStickers(input: TrendingStickersInput!): [Sticker]!
  }
`;

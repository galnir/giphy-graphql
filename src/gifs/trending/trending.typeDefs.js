import { gql } from 'apollo-server';

export const gifTrendingTypeDefs = gql`
  input TrendingGifsInput {
    limit: Int
    offset: Int
    rating: String
  }
  extend type Query {
    getTrendingGifs(input: TrendingGifsInput): [Gif]!
  }
`;

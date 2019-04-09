import { gql } from 'apollo-server';

export const gifTrendingTypeDefs = gql`
  extend type Query {
    trendingGifs(limit: Int, offset: Int, rating: String): [GifsData!]!
  }
`;

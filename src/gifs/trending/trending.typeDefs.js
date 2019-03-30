import { gql } from 'apollo-server';

export const gifTrendingTypeDefs = gql`
  extend type Query {
    getTrendingGifs(limit: Int, offset: Int, rating: String): [Gif]!
  }
`;

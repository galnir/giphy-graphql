import { gql } from 'apollo-server';

export const trendingTypeDefs = gql`
  extend type Query {
    getTrendingGifs: [Gif]!
  }
`;

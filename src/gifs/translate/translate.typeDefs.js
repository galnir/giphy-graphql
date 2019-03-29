import { gql } from 'apollo-server';

export const gifTranslateTypeDefs = gql`
  extend type Query {
    getTranslateGif(query: String!): Gif!
  }
`;

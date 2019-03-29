import { gql } from 'apollo-server';

export const gifIdTypeDefs = gql`
  extend type Query {
    getGifById(id: String!): Gif
  }
`;

import { gql } from 'apollo-server';

export const gifsIdTypeDefs = gql`
  extend type Query {
    gifsByID(ids: String!): [Gif!]
  }
`;

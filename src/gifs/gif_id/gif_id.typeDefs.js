import { gql } from 'apollo-server';

export const gifIdTypeDefs = gql`
  extend type Query {
    gifByID(id: String!): Gif
  }
`;

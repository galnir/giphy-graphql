import { gql } from 'apollo-server';

export const randomIdTypeDefs = gql`
  extend type Query {
    randomId: String!
  }
`;

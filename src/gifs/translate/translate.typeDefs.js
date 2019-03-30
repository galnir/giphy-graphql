import { gql } from 'apollo-server';

export const gifTranslateTypeDefs = gql`
  extend type Query {
    getTranslateGif(s: String!, weirdness: Int): Gif!
  }
`;

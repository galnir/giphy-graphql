import { gql } from 'apollo-server';

export const gifTranslateTypeDefs = gql`
  input TranslateGifInput {
    s: String!
    weirdness: Int
  }
  extend type Query {
    getTranslateGif(input: TranslateGifInput!): Gif!
  }
`;

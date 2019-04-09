import { gql } from 'apollo-server';

export const gifTranslateTypeDefs = gql`
  extend type Query {
    translateGif(s: String!, weirdness: Int): GifData!
  }
`;

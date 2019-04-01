import { gql } from 'apollo-server';

export const stickerTranslateTypeDefs = gql`
  extend type Query {
    translateSticker(query: String!): Sticker!
  }
`;

import { gql } from 'apollo-server';

export const stickerTranslateTypeDefs = gql`
  extend type Query {
    getTranslateSticker(query: String!): Sticker!
  }
`;

import { gql } from 'apollo-server';

export const stickerSearchTypeDefs = gql`
  type Sticker {
    type: String!
    id: String!
    slug: String!
    url: String!
    title: String!
    bitly_gif_url: String!
    bitly_url: String!
    embed_url: String!
    username: String!
    source: String!
    rating: String!
    content_url: String!
    source_tld: String!
    source_post_url: String!
    is_sticker: Int!
    import_datetime: String!
    trending_datetime: String!
    user: User # Some gifs do not have a user
    images: Image
    _score: Int!
  }

  extend type Query {
    sticker(query: String!, offset: Int, rating: String, lang: String): Sticker!
    stickers(
      query: String!
      limit: Int
      offset: Int
      rating: String
      lang: String
    ): [Sticker]!
  }
`;

import { gql } from 'apollo-server';

export const translateTypeDefs = gql`
  type TranslateGif {
    type: String
    id: String!
    slug: String
    url: String!
    bitly_gif_url: String
    bitly_url: String
    embed_url: String
    username: String
    source: String
    rating: String
    content_url: String
    source_tld: String
    source_post_url: String
    is_sticker: Int
    import_datetime: String
    trending_datetime: String
    images: Image
    title: String
  }

  extend type Query {
    getTranslateGif(query: String!): TranslateGif!
  }
`;

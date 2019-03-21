import { gql } from 'apollo-server';

export const randomTypeDefs = gql`
  type RandomGif {
    type: String
    id: String!
    slug: String
    url: String!
    bitly_gif_url: String
    bitly_url: String
    embed_url: String
    username: String
    source: String
    content_url: String
    source_tld: String
    source_post_url: String
    is_sticker: Int
    import_datetime: String
    trending_datetime: String
    title: String
    image_url: String
    image_frames: String
    image_width: String
    image_height: String
    caption: String
  }

  extend type Query {
    getRandomGif(query: String): RandomGif
  }
`;

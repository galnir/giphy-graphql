const { gql } = require('apollo-server');

export const typeDefs = gql`
  type Gif {
    type: String
    id: String
    slug: String
    url: String
    title: String
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
    user: User # Some gifs do not have a user
    images: Image
    _score: Int
  }

  type Image {
    url: String
    width: String
    height: String
    size: String
    frames: String
    mp4: String
    mp4_size: String
    webp: String
    webp_size: String
    hash: String
  }

  type User {
    avatar_url: String
    banner_url: String
    banner_image: String
    profile_url: String
    username: String
    display_name: String
    is_verified: Boolean
  }

  type Query {
    gif(query: String!): Gif
    gifs(query: String!): [Gif]
  }
`;

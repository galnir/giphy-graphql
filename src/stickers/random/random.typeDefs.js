import { gql } from 'apollo-server';

export const stickerRandomTypeDefs = gql`
  type RandomSticker {
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
    user: User
    images: Image
    title: String
    image_original_url: String
    image_url: String
    image_mp4_url: String
    image_frames: String
    image_width: String
    image_height: String
    fixed_height_downsampled_url: String
    fixed_height_downsampled_width: String
    fixed_height_downsampled_height: String
    fixed_width_downsampled_url: String
    fixed_width_downsampled_width: String
    fixed_width_downsampled_height: String
    fixed_height_small_url: String
    fixed_height_small_still_url: String
    fixed_height_small_width: String
    fixed_height_small_height: String
    fixed_width_small_url: String
    fixed_width_small_still_url: String
    fixed_width_small_width: String
    fixed_width_small_height: String
    caption: String
  }
  extend type Query {
    getRandomSticker(query: String): RandomSticker
  }
`;

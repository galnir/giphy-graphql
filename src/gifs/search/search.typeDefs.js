import { gql } from 'apollo-server';

export const gifSearchTypeDefs = gql`
  # Single Gif data that contains pagination and meta objects
  type GifData {
    gifData: Gif!
    meta: Meta!
  }
  # Multiple Gifs data that contain pagination and meta objects
  type GifsData {
    gifsData: [Gif!]!
    pagination: Pagination
    meta: Meta!
  }
  # The Gif type itself
  type Gif {
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
    images: ImageType
    _score: Int!
  }
  # Start of image type implementations(Each one represents an image that
  # comes back from the json response data)
  type ImageType {
    fixed_height_still: Fixed_Height_Still!
    original_still: Original_Still!
    fixed_width: Fixed_Width!
    fixed_height_small_still: Fixed_Height_Small_Still!
    fixed_height_downsampled: Fixed_Height_Downsampled!
    preview: Preview!
    fixed_height_small: Fixed_Height_Small!
    downsized_still: Downsized_Still!
    downsized: Downsized!
    downsized_large: Downsized_Large!
    fixed_width_small_still: Fixed_Width_Small_Still!
    preview_webp: Preview_Webp!
    fixed_width_still: Fixed_Width_Still!
    fixed_width_small: Fixed_Width_Small!
    downsized_small: Downsized_Small!
    fixed_width_downsampled: Fixed_Width_Downsampled!
    downsized_medium: Downsized_Medium!
    original: Original!
    fixed_height: Fixed_Height!
    looping: Looping!
    original_mp4: Original_Mp4!
    preview_gif: Preview_Gif!
  }

  type Fixed_Height_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Original_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Fixed_Width {
    url: String!
    width: String!
    height: String!
    size: String!
    mp4: String!
    mp4_size: String!
    webp: String!
    webp_size: String!
  }

  type Fixed_Height_Small_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Fixed_Height_Downsampled {
    url: String!
    width: String!
    height: String!
    size: String!
    webp: String!
    webp_size: String!
  }

  type Preview {
    width: String!
    height: String!
    mp4: String!
    mp4_size: String!
  }

  type Fixed_Height_Small {
    url: String!
    width: String!
    height: String!
    size: String!
    mp4: String!
    mp4_size: String!
    webp: String!
    webp_size: String!
  }

  type Downsized_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Downsized {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Downsized_Large {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Fixed_Width_Small_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Preview_Webp {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Fixed_Width_Still {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Fixed_Width_Small {
    url: String!
    width: String!
    height: String!
    size: String!
    mp4: String!
    mp4_size: String!
    webp: String!
    webp_size: String!
  }

  type Downsized_Small {
    width: String!
    height: String!
    mp4: String!
    mp4_size: String!
  }

  type Fixed_Width_Downsampled {
    url: String!
    width: String!
    height: String!
    size: String!
    webp: String!
    webp_size: String!
  }

  type Downsized_Medium {
    url: String!
    width: String!
    height: String!
    size: String!
  }

  type Original {
    url: String!
    width: String!
    height: String
    size: String!
    frames: String!
    mp4: String!
    mp4_size: String!
    webp: String!
    webp_size: String!
    hash: String!
  }

  type Fixed_Height {
    url: String!
    width: String!
    height: String!
    size: String!
    mp4: String!
    mp4_size: String!
    webp: String!
    webp_size: String!
  }

  type Looping {
    mp4: String!
    mp4_size: String!
  }

  type Original_Mp4 {
    width: String!
    height: String!
    mp4: String!
    mp4_size: String!
  }

  type Preview_Gif {
    url: String!
    width: String!
    height: String!
    size: String!
  }
  # End of image types

  # User type(fields match those of the user in the json response data)
  type User {
    avatar_url: String!
    banner_url: String!
    banner_image: String!
    profile_url: String!
    username: String!
    display_name: String!
    is_verified: Boolean!
  }
  # Pagination object
  type Pagination {
    total_count: Int!
    count: Int!
    offset: Int!
  }
  # Meta object
  type Meta {
    status: Int!
    msg: String!
    response_id: String!
  }
  # 2 types of queries here, 'gif' for a single gif and 'gifs' for multiple gifs
  type Query {
    gif(query: String!, offset: Int, rating: String, lang: String): GifData!
    gifs(
      query: String!
      limit: Int
      offset: Int
      rating: String
      lang: String
    ): GifsData!
  }
`;

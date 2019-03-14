import { ApolloServer, gql } from 'apollo-server';
import { GiphyAPI } from './datasource';

const typeDefs = gql`
  type Gif {
    id: String!
    title: String!
    url: String!
    username: String!
    rating: String!
    source: String!
    import_datetime: String!
  }

  type Query {
    gif(query: String!): Gif
    gifs(query: String!): [Gif]
  }
`;

const resolvers = {
  Query: {
    gif: (root, { query }, { dataSources }) =>
      dataSources.GiphyAPI.getAGif(query),
    gifs: (root, { query }, { dataSources }) =>
      dataSources.GiphyAPI.getGifs(query)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GiphyAPI: new GiphyAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

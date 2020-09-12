import { ApolloClient, HttpLink } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';

let apolloClient = null;

export function createApolloClient() {
  if (apolloClient) {
    return apolloClient;
  }

  return apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:4001/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

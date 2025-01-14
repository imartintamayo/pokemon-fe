import { ApolloQueryResult } from '@apollo/client';

export interface ApolloQueryCall<T> {
  call: Promise<ApolloQueryResult<any>>;
  controller?: AbortController;
}

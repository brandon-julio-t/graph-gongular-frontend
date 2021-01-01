import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getMainDefinition } from '@apollo/client/utilities';

import {
  createErrorLink,
  createHttpLink,
  createWebSocketLink,
} from '../factories/apollo-factory';
import { StoreService } from './services/store.service';

export function createApollo(
  httpLink: HttpLink,
  snackBar: MatSnackBar,
  storeService: StoreService
): ApolloClientOptions<any> {
  const onError = createErrorLink(snackBar);
  const ws = createWebSocketLink(snackBar, storeService);
  const http = createHttpLink(httpLink);

  return {
    link: ApolloLink.from([
      onError,
      split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        ws,
        http
      ),
    ]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, MatSnackBar, StoreService],
    },
  ],
})
export class GraphQLModule {}

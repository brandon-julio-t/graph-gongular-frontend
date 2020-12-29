import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  createErrorHandler,
  createHttpLinkHandler,
} from '../factories/apollo-factory';

export function createApollo(
  httpLink: HttpLink,
  snackBar: MatSnackBar
): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([
      createErrorHandler(snackBar),
      createHttpLinkHandler(httpLink),
    ]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, MatSnackBar],
    },
  ],
})
export class GraphQLModule {}

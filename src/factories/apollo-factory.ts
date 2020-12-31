import { HttpLink, HttpLinkHandler } from 'apollo-angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client/core';

const uri = 'https://graph-gongular-backend.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
// const uri = 'http://localhost:8080/graphql'; // <-- add the URL of the GraphQL server here

function createHttpLinkHandler(httpLink: HttpLink): HttpLinkHandler {
  return httpLink.create({
    uri,
    withCredentials: true,
    useMultipart: true,
  });
}

function createErrorHandler(snackBar: MatSnackBar): ApolloLink {
  return onError((error) => {
    const { graphQLErrors, networkError } = error;

    if (graphQLErrors) {
      const errorMessages = graphQLErrors.map((graphQLError) => {
        const { message, locations, path } = graphQLError;
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
        return message;
      });

      snackBar.open(errorMessages.join('\n'), 'Close', { duration: 4000 });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      snackBar.open(networkError.message, 'Close', { duration: 4000 });
    }
  });
}

export { createHttpLinkHandler, createErrorHandler };

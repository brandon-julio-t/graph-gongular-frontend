import { HttpLink, HttpLinkHandler } from 'apollo-angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { StoreService } from '../app/services/store.service';

const production = {
  http: 'https://graph-gongular-backend.herokuapp.com/graphql',
  websocket: 'wss://graph-gongular-backend.herokuapp.com/graphql',
};

const development = {
  http: 'http://localhost:8080/graphql',
  websocket: 'ws://localhost:8080/graphql',
};

const current = production;

function createHttpLink(httpLink: HttpLink): HttpLinkHandler {
  return httpLink.create({
    uri: current.http,
    withCredentials: true,
    useMultipart: true,
  });
}

function createWebSocketLink(
  snackBar: MatSnackBar,
  storeService: StoreService
): WebSocketLink {
  return new WebSocketLink({
    uri: current.websocket,
    options: {
      reconnect: true,
      lazy: true,
      connectionCallback: () => {
        storeService.websocketOk = true;
        snackBar.open('Successfully connected. Start chatting now.', 'Close', {
          duration: 4000,
        });
      },
    },
  });
}

function createErrorLink(snackBar: MatSnackBar): ApolloLink {
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

export { createHttpLink, createWebSocketLink, createErrorLink };

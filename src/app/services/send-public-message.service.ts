import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class SendPublicMessageService extends Mutation<Response> {
  document = gql`
    mutation sendMessage($message: String!) {
      sendMessage(message: $message) {
        id
      }
    }
  `;
}

interface Response {
  sendMessage: {
    id: string;
  };
}

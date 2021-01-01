import { Injectable } from '@angular/core';
import { gql, Subscription } from 'apollo-angular';
import { PublicMessage } from '../interfaces/public-message';

@Injectable({
  providedIn: 'root',
})
export class PublicChatSubscriptionService extends Subscription<Response> {
  document = gql`
    subscription messageAdded {
      messageAdded {
        id
        user {
          id
          name
          email
          dateOfBirth
          gender
          address
          userRole {
            id
            name
          }
        }
        message
        createdAt
      }
    }
  `;
}

interface Response {
  messageAdded: PublicMessage;
}

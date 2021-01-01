import { Injectable } from '@angular/core';
import { PublicMessage } from '../interfaces/public-message';
import { gql, Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AllPublicMessagesService extends Query<Response> {
  document = gql`
    query publicMessages {
      messages {
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
  messages: PublicMessage[];
}

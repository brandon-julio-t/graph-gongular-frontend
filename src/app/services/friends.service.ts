import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class FriendsService extends Query<Response> {
  document = gql`
    query friends {
      auth {
        friends {
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
      }
    }
  `;
}

interface Response {
  auth: {
    friends: User[];
  };
}

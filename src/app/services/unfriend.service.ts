import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UnfriendService extends Mutation<Response> {
  document = gql`
    mutation removeFriend($friendId: ID!) {
      removeFriend(friendId: $friendId) {
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
  `;
}

interface Response {
  removeFriend: User;
}

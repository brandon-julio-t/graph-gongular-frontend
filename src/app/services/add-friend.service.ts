import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AddFriendService extends Mutation<Response> {
  document = gql`
    mutation addFriend($friendId: ID!) {
      addFriend(friendId: $friendId) {
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
  addFriend: User;
}

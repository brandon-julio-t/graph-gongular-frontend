import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AllUsersService extends Query<Response> {
  document = gql`
    query allUsers {
      allUsers {
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
  allUsers: User[];
}

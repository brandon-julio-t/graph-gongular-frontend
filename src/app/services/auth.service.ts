import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends Query<Response> {
  document = gql`
    query auth {
      auth {
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

export interface Response {
  auth: User | null;
}

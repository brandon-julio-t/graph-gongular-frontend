import { Injectable } from '@angular/core';
import { gql, Query, QueryRef } from 'apollo-angular';
import { User } from '../interfaces/user';
import { EmptyObject, WatchQueryOptionsAlone } from 'apollo-angular/types';

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

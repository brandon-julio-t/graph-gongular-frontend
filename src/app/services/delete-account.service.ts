import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteAccountService extends Mutation<Response> {
  document = gql`
    mutation deleteAccount($id: ID!) {
      deleteAccount(input: { id: $id }) {
        id
        name
        email
        password
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
  deleteAccount: User;
}

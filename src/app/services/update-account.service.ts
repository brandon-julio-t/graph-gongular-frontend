import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class UpdateAccountService extends Mutation<Response> {
  document = gql`
    mutation updateAccount(
      $id: ID!
      $name: String!
      $email: String!
      $dateOfBirth: Time!
      $gender: String!
      $address: String!
    ) {
      updateAccount(
        input: {
          id: $id
          name: $name
          email: $email
          dateOfBirth: $dateOfBirth
          gender: $gender
          address: $address
        }
      ) {
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
  updateAccount: User;
}

import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends Mutation<Response> {
  document = gql`
    mutation register(
      $name: String!
      $email: String!
      $password: String!
      $dateOfBirth: Time!
      $gender: String!
      $address: String!
    ) {
      register(
        input: {
          name: $name
          email: $email
          password: $password
          dateOfBirth: $dateOfBirth
          gender: $gender
          address: $address
        }
      ) {
        id
      }
    }
  `;
}

export interface Response {
  register: {
    id: string;
  };
}

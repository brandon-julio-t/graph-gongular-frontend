import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { User } from '../interfaces/user';

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
  register: User;
}

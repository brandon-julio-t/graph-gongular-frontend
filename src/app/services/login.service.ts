import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends Mutation<Response> {
  document = gql`
    mutation login($email: String!, $password: String!) {
      login(input: { email: $email, password: $password })
    }
  `;
}

interface Response {
  login: string;
}

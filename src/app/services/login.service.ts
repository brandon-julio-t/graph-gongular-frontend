import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends Query<Response> {
  document = gql`
    query login($email: String!, $password: String!) {
      login(input: { email: $email, password: $password })
    }
  `;
}

export interface Response {
  login: string;
}

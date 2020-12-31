import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LogoutService extends Mutation<Response> {
  document = gql`
    mutation logout {
      logout
    }
  `;
}

interface Response {
  logout: boolean;
}

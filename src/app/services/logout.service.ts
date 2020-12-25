import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LogoutService extends Query<Response> {
  document = gql`
    query logout {
      logout
    }
  `;
}

export interface Response {
  logout: boolean;
}

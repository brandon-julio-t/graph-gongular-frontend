import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteAccountService extends Mutation<Response> {
  document = gql`
    mutation deleteAccount {
      deleteAccount {
        id
      }
    }
  `;
}

interface Response {
  deleteAccount: {
    id: string;
  };
}

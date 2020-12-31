import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteFileService extends Mutation<Response> {
  document = gql`
    mutation deleteFile($id: ID!) {
      deleteFile(id: $id) {
        id
      }
    }
  `;
}

interface Response {
  deleteFile: {
    id: string;
  };
}

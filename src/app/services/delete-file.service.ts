import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { UserFile } from '../interfaces/user-file';
import { Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteFileService extends Mutation<Response> {
  document = gql`
    mutation deleteFile($id: ID!) {
      deleteFile(id: $id) {
        id
        path
        filename
        size
        contentType
      }
    }
  `;
}

export interface Response {
  deleteFile: UserFile;
}

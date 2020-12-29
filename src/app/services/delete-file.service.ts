import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { FileUpload } from '../interfaces/file-upload';
import { Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DeleteFileService extends Mutation<Response> {
  document = gql`
    mutation deleteFile($id: ID!) {
      deleteFile(id: $id) {
        id
        filename
        extension
        size
        contentType
      }
    }
  `;
}

export interface Response {
  deleteFile: FileUpload;
}

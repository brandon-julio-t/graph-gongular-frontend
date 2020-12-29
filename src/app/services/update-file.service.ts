import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Mutation } from 'apollo-angular';
import { FileUpload } from '../interfaces/file-upload';

@Injectable({
  providedIn: 'root',
})
export class UpdateFileService extends Mutation<Response> {
  document = gql`
    mutation updateFile($id: ID!, $filename: String!) {
      updateFile(input: { id: $id, filename: $filename }) {
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
  updateFile: FileUpload;
}

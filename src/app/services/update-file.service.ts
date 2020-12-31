import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
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

interface Response {
  updateFile: FileUpload;
}

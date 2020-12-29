import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Query } from 'apollo-angular';
import { FileUpload } from '../interfaces/file-upload';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends Query<Response> {
  document = gql`
    query files {
      files {
        id
        filename
        extension
        size
        contentType
        userId
      }
    }
  `;
}

export interface Response {
  files: FileUpload[];
}

import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { FileUpload } from '../interfaces/file-upload';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends Query<Response> {
  document = gql`
    query fileUploads {
      auth {
        fileUploads {
          id
          filename
          extension
          size
          contentType
        }
      }
    }
  `;
}

interface Response {
  auth: {
    fileUploads: FileUpload[];
  };
}

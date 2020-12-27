import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Query } from 'apollo-angular';
import { UserFile } from '../interfaces/user-file';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends Query<Response> {
  document = gql`
    query auth {
      auth {
        files {
          id
          path
          filename
          size
          contentType
        }
      }
    }
  `;
}

export interface Response {
  auth: {
    files: UserFile[];
  };
}

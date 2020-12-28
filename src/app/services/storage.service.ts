import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Query } from 'apollo-angular';
import { UserFile } from '../interfaces/user-file';

@Injectable({
  providedIn: 'root',
})
export class StorageService extends Query<Response> {
  document = gql`
    query files {
      files {
        id
        path
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
  files: UserFile[];
}

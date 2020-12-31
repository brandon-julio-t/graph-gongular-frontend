import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class UploadService extends Mutation<Response> {
  document = gql`
    mutation upload($files: [Upload!]!) {
      upload(files: $files)
    }
  `;
}

interface Response {
  upload: boolean;
}

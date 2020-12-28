import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class DownloadService extends Query<Response> {
  document = gql`
    query download($id: ID!) {
      download(id: $id)
    }
  `;

  downloadBase64(base64: string, filename: string): void {
    const decoded = atob(base64);

    const binary = new Array(decoded.length);
    for (let i = 0; i < decoded.length; i++) {
      binary[i] = decoded.charCodeAt(i);
    }

    const byteArray = new Uint8Array(binary);
    const blob = new Blob([byteArray]);
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }
}

export interface Response {
  download: string;
}

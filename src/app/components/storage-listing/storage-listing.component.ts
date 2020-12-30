import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { FileUpload } from '../../interfaces/file-upload';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-storage-listing',
  templateUrl: './storage-listing.component.html',
  styleUrls: ['./storage-listing.component.scss'],
})
export class StorageListingComponent implements OnInit {
  files: FileUpload[] = [];
  isLoading = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.isLoading = true;

    this.storageService
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.pipe(
        catchError((err) => {
          this.isLoading = false;
          throw err;
        })
      )
      .subscribe((data) => {
        this.files = data.data.auth.fileUploads;
        this.isLoading = false;
      });
  }

  onUpdate(updatedFile: FileUpload): void {
    const newFiles = new Array(this.files.length);

    for (let i = 0; i < this.files.length; i++) {
      const file = this.files[i];
      newFiles[i] = file.id === updatedFile.id ? updatedFile : file;
    }

    this.files = newFiles;
  }

  onDelete(deletedId: string): void {
    this.files = this.files.filter((file) => file.id !== deletedId);
  }
}

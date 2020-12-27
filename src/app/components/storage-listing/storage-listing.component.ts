import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UserFile } from '../../interfaces/user-file';

@Component({
  selector: 'app-storage-listing',
  templateUrl: './storage-listing.component.html',
  styleUrls: ['./storage-listing.component.scss'],
})
export class StorageListingComponent implements OnInit {
  files: UserFile[] = [];
  isLoading = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.isLoading = true;

    this.storageService
      .watch({}, { fetchPolicy: 'network-only' })
      .valueChanges.subscribe((data) => {
        this.files = data.data.auth.files;
        this.isLoading = false;
      });
  }

  onUpdate(updatedFile: UserFile): void {
    this.files.forEach((file, idx) => {
      if (file.id === updatedFile.id) {
        this.files[idx] = updatedFile;
      }
    });
  }

  onDelete(deletedFile: UserFile): void {
    this.files = this.files.filter((file) => file.id !== deletedFile.id);
  }
}

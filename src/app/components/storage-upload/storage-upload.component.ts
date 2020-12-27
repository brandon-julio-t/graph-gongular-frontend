import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-storage-upload',
  templateUrl: './storage-upload.component.html',
  styleUrls: ['./storage-upload.component.scss'],
})
export class StorageUploadComponent implements OnInit {
  @Output() submit = new EventEmitter<void>();

  files: FileList | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onChange(input: EventTarget | null): void {
    if (input instanceof HTMLInputElement) {
      this.files = input.files;
    }
  }

  onClick(): void {
    const files = [];
    for (let i = 0; i < (this.files?.length ?? 0); i++) {
      files.push(this.files?.item(i));
    }

    if (files.length === 0) {
      this.snackBar.open('Please select a file first.', 'Close', {
        duration: 4000,
      });
      return;
    }

    this.isLoading = true;

    this.uploadService.mutate({ files }).subscribe((data) => {
      if (data.data?.upload) {
        this.snackBar.open('Files uploaded.', 'Close', { duration: 4000 });
        this.isLoading = false;
        this.files = null;
        this.submit.emit();
      }
    });
  }
}

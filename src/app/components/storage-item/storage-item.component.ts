import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserFile } from '../../interfaces/user-file';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UpdateFileService } from '../../services/update-file.service';
import { DeleteFileService } from '../../services/delete-file.service';

@Component({
  selector: 'app-storage-item',
  templateUrl: './storage-item.component.html',
  styleUrls: ['./storage-item.component.scss'],
})
export class StorageItemComponent implements OnInit {
  @Input() file: UserFile;
  @Output() update = new EventEmitter<UserFile>();
  @Output() delete = new EventEmitter<UserFile>();

  newFilename: FormControl;
  isEditing = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private updateFileService: UpdateFileService,
    private deleteFileService: DeleteFileService
  ) {
    this.newFilename = fb.control('', Validators.required);
  }

  ngOnInit(): void {
    this.newFilename.setValue(this.file.filename);
  }

  onEditDone(): void {
    if (this.newFilename.invalid) {
      this.newFilename.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.updateFileService
      .mutate({ id: this.file.id, filename: this.newFilename.value })
      .subscribe((data) => {
        const updatedFile = data.data?.updateFile;
        if (updatedFile) {
          this.update.emit(updatedFile);
          this.isLoading = this.isEditing = false;
        }
      });
  }

  onDelete(): void {
    this.isLoading = true;

    this.deleteFileService.mutate({ id: this.file.id }).subscribe((data) => {
      const deletedFile = data.data?.deleteFile;
      if (deletedFile) {
        this.delete.emit(deletedFile);
        this.isLoading = false;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-account-confirm-dialog',
  templateUrl: './delete-account-confirm-dialog.component.html',
  styleUrls: ['./delete-account-confirm-dialog.component.scss'],
})
export class DeleteAccountConfirmDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteAccountConfirmDialogComponent>
  ) {}

  ngOnInit(): void {}

  doAccountDelete(doIt: boolean): void {
    this.dialogRef.close(doIt);
  }
}

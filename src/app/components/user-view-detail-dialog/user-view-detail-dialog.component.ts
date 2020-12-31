import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-view-detail',
  templateUrl: './user-view-detail-dialog.component.html',
  styleUrls: ['./user-view-detail-dialog.component.scss'],
})
export class UserViewDetailDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<UserViewDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {}

  ngOnInit(): void {}
}

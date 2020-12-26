import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountConfirmDialogComponent } from '../delete-account-confirm-dialog/delete-account-confirm-dialog.component';
import { DeleteAccountService } from '../../services/delete-account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: User | null = null;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private deleteAccountService: DeleteAccountService
  ) {
    authService.watch().valueChanges.subscribe((data) => {
      this.user = data.data.auth;
    });
  }

  ngOnInit(): void {}

  openDeleteAccountDialog(): void {
    this.dialog
      .open(DeleteAccountConfirmDialogComponent)
      .afterClosed()
      .subscribe((isDeleteConfirmed) => {
        if (isDeleteConfirmed) {
          this.isLoading = true;

          this.deleteAccountService
            .mutate({ id: this.user?.id })
            .subscribe((data) => {
              if (data.data?.deleteAccount) {
                window.location.reload();
              }
            });
        }
      });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountService } from '../../services/delete-account.service';
import { DeleteAccountConfirmDialogComponent } from '../delete-account-confirm-dialog/delete-account-confirm-dialog.component';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss'],
})
export class AccountViewComponent implements OnInit {
  @Output() update = new EventEmitter<void>();

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

          this.deleteAccountService.mutate().subscribe((data) => {
            if (data.data?.deleteAccount) {
              window.location.reload();
            }
          });
        }
      });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AddFriendService } from '../../services/add-friend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserViewDetailDialogComponent } from '../user-view-detail-dialog/user-view-detail-dialog.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  @Input() user: User | null = null;

  constructor(
    private addFriendService: AddFriendService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addFriend(): void {
    this.addFriendService
      .mutate({ friendId: this.user?.id })
      .subscribe((data) => {
        if (data.data?.addFriend) {
          this.snackBar.open('User added as friend', 'Close', {
            duration: 4000,
          });
        }
      });
  }

  viewDetail(): void {
    console.log('duar');
    this.dialog.open(UserViewDetailDialogComponent, {
      width: '300px',
      data: {
        user: this.user,
      },
    });
  }
}

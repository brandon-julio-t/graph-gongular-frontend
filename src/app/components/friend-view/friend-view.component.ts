import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../interfaces/user';
import { UnfriendService } from '../../services/unfriend.service';

@Component({
  selector: 'app-friend-view',
  templateUrl: './friend-view.component.html',
  styleUrls: ['./friend-view.component.scss'],
})
export class FriendViewComponent implements OnInit {
  @Input() friend: User | null = null;
  @Output() unfriend = new EventEmitter<User>();

  isLoading = false;

  constructor(private unfriendService: UnfriendService) {}

  ngOnInit(): void {}

  onUnfriend(): void {
    this.isLoading = true;

    this.unfriendService
      .mutate({ friendId: this.friend?.id })
      .subscribe((data) => {
        const removedFriend = data.data?.removeFriend;
        if (removedFriend) {
          this.unfriend.emit(removedFriend);
          this.isLoading = false;
        }
      });
  }
}

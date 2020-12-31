import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-friends-view',
  templateUrl: './friends-view.component.html',
  styleUrls: ['./friends-view.component.scss'],
})
export class FriendsViewComponent implements OnInit {
  friends: User[] = [];
  isLoading = true;

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService.watch().valueChanges.subscribe((data) => {
      this.friends = data.data.auth.friends;
      this.isLoading = false;
    });
  }

  onUnfriend(removedFriend: User): void {
    this.friends = this.friends.filter(
      (friend) => friend.id !== removedFriend.id
    );
  }
}

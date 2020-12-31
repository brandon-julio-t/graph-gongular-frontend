import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AllUsersService } from '../../services/all-users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-friends-search',
  templateUrl: './friends-search.component.html',
  styleUrls: ['./friends-search.component.scss'],
})
export class FriendsSearchComponent implements OnInit {
  users: User[] = [];
  isLoading = true;

  constructor(private allUsersService: AllUsersService) {}

  ngOnInit(): void {
    this.allUsersService.watch().valueChanges.subscribe((data) => {
      this.users = data.data.allUsers;
      this.isLoading = false;
    });
  }
}

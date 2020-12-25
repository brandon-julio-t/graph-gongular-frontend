import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private logoutService: LogoutService, private router: Router) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.logoutService.watch().valueChanges.subscribe((data) => {
      if (data.data.logout) {
        window.location.reload();
      }
    });
  }
}

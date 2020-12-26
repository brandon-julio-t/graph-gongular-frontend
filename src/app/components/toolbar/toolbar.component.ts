import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private logoutService: LogoutService) {}

  ngOnInit(): void {}

  onLogout(): void {
    this.logoutService.watch().valueChanges.subscribe((data) => {
      if (data.data.logout) {
        window.location.reload();
      }
    });
  }
}

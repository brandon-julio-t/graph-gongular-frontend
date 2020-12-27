import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const seconds = 30;
    const ms = seconds * 1000;
    this.authService.watch({}, { pollInterval: ms }).valueChanges.subscribe();
  }
}

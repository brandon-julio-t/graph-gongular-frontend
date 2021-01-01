import { Component, Input, OnInit } from '@angular/core';
import { PublicMessage } from '../../interfaces/public-message';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-chat-message',
  templateUrl: './public-chat-message.component.html',
  styleUrls: ['./public-chat-message.component.scss'],
})
export class PublicChatMessageComponent implements OnInit {
  @Input() publicMessage: PublicMessage | null = null;

  isMe = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.watch().valueChanges.subscribe((data) => {
      const user = data.data.auth;
      if (user) {
        this.isMe = this.publicMessage?.user.id === user.id;
      }
    });
  }
}

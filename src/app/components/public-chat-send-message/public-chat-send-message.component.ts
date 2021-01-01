import { Component, OnInit } from '@angular/core';
import { SendPublicMessageService } from '../../services/send-public-message.service';

@Component({
  selector: 'app-public-chat-send-message',
  templateUrl: './public-chat-send-message.component.html',
  styleUrls: ['./public-chat-send-message.component.scss'],
})
export class PublicChatSendMessageComponent implements OnInit {
  isLoading = false;
  message = '';

  constructor(private sendPublicMessageService: SendPublicMessageService) {}

  ngOnInit(): void {}

  onSend(): void {
    this.isLoading = true;

    this.sendPublicMessageService
      .mutate({ message: this.message })
      .subscribe((data) => {
        if (data.data?.sendMessage) {
          this.isLoading = false;
          this.message = '';
        }
      });
  }
}

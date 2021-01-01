import { Component, OnInit } from '@angular/core';
import { PublicChatSubscriptionService } from '../../services/public-chat-subscription.service';
import { PublicMessage } from '../../interfaces/public-message';
import { StoreService } from '../../services/store.service';
import { AllPublicMessagesService } from '../../services/all-public-messages.service';

@Component({
  selector: 'app-public-chat',
  templateUrl: './public-chat.component.html',
  styleUrls: ['./public-chat.component.scss'],
})
export class PublicChatComponent implements OnInit {
  publicMessages: PublicMessage[] = [];

  constructor(
    private allPublicChatService: AllPublicMessagesService,
    private publicChatSubscriptionService: PublicChatSubscriptionService,
    public storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.allPublicChatService.watch().valueChanges.subscribe((data) => {
      this.publicMessages = [...this.publicMessages, ...data.data.messages];

      this.scrollChatToBottom();
    });

    this.publicChatSubscriptionService.subscribe().subscribe((data) => {
      const publicMessage = data.data?.messageAdded;
      if (publicMessage) {
        this.publicMessages.push(publicMessage);

        this.scrollChatToBottom();
      }
    });
  }

  scrollChatToBottom(): void {
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-container');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 1500);
  }
}

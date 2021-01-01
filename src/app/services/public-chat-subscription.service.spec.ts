import { TestBed } from '@angular/core/testing';

import { PublicChatSubscriptionService } from './public-chat-subscription.service';

describe('PublicChatSubscriptionService', () => {
  let service: PublicChatSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicChatSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

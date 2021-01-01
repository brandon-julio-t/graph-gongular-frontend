import { TestBed } from '@angular/core/testing';

import { SendPublicMessageService } from './send-public-message.service';

describe('SendPublicMessageService', () => {
  let service: SendPublicMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendPublicMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

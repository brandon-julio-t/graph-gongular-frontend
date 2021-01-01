import { TestBed } from '@angular/core/testing';

import { AllPublicMessagesService } from './all-public-messages.service';

describe('AllPublicMessagesService', () => {
  let service: AllPublicMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPublicMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

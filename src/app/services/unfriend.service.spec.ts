import { TestBed } from '@angular/core/testing';

import { UnfriendService } from './unfriend.service';

describe('UnfriendService', () => {
  let service: UnfriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnfriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UpdateFileService } from './update-file.service';

describe('UpdateFileService', () => {
  let service: UpdateFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

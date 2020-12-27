import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageUploadComponent } from './storage-upload.component';

describe('StorageUploadComponent', () => {
  let component: StorageUploadComponent;
  let fixture: ComponentFixture<StorageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

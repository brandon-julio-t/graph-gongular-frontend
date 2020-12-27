import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageListingComponent } from './storage-listing.component';

describe('StorageListingComponent', () => {
  let component: StorageListingComponent;
  let fixture: ComponentFixture<StorageListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

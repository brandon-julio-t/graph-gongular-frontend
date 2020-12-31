import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDetailDialogComponent } from './user-view-detail-dialog.component';

describe('UserViewDetailComponent', () => {
  let component: UserViewDetailDialogComponent;
  let fixture: ComponentFixture<UserViewDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserViewDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

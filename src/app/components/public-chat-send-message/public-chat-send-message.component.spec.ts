import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChatSendMessageComponent } from './public-chat-send-message.component';

describe('PublicChatSendMessageComponent', () => {
  let component: PublicChatSendMessageComponent;
  let fixture: ComponentFixture<PublicChatSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicChatSendMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicChatSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

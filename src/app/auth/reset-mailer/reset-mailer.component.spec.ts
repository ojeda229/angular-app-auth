import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMailerComponent } from './reset-mailer.component';

describe('ResetMailerComponent', () => {
  let component: ResetMailerComponent;
  let fixture: ComponentFixture<ResetMailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetMailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetMailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

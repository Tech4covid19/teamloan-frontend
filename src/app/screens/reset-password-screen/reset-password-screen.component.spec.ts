import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordScreenComponent } from './reset-password-screen.component';

describe('ResetPasswordScreenComponent', () => {
  let component: ResetPasswordScreenComponent;
  let fixture: ComponentFixture<ResetPasswordScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

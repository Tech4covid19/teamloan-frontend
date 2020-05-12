import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePostViewComponent } from './close-post-view.component';

describe('ClosePostViewComponent', () => {
  let component: ClosePostViewComponent;
  let fixture: ComponentFixture<ClosePostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosePostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

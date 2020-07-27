import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListComponent } from './faq-list.component';

describe('FaqListComponent', () => {
  let component: FaqListComponent;
  let fixture: ComponentFixture<FaqListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLenderComponent } from './section-lender.component';

describe('SectionLenderComponent', () => {
  let component: SectionLenderComponent;
  let fixture: ComponentFixture<SectionLenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionLenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

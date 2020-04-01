import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntroComponent } from './section-intro.component';

describe('SectionIntroComponent', () => {
  let component: SectionIntroComponent;
  let fixture: ComponentFixture<SectionIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

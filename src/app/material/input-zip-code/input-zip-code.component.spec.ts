import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputZipCodeComponent } from './input-zip-code.component';

describe('InputZipCodeComponent', () => {
  let component: InputZipCodeComponent;
  let fixture: ComponentFixture<InputZipCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputZipCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialScreenComponent } from './material-screen.component';

describe('MaterialScreenComponent', () => {
  let component: MaterialScreenComponent;
  let fixture: ComponentFixture<MaterialScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

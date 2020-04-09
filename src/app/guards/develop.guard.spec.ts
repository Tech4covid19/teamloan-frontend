import { TestBed } from '@angular/core/testing';

import { DevelopGuard } from './develop.guard';

describe('DevelopGuard', () => {
  let guard: DevelopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DevelopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

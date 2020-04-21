import { TestBed } from '@angular/core/testing';

import { PostingService } from './posting.service';

describe('PostingService', () => {
  let service: PostingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

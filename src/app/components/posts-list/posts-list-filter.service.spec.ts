import { TestBed } from '@angular/core/testing';

import { PostsListFilterService } from './posts-list-filter.service';

describe('PostsListFilterService', () => {
    let service: PostsListFilterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostsListFilterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

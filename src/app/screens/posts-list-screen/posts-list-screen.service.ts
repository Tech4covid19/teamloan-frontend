import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { Posting } from 'src/app/models/posting/posting';
import { PostingService } from 'src/app/services/posting/posting.service';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Injectable()
export class PostsListScreenService extends AbsctractPostsListService {
    constructor(private postingService: PostingService) {
        super();
    }

    public getPosting(filters: QueryFilterInterface): Observable<Posting[]> {
        return this.postingService.getPosting(filters);
    }
}

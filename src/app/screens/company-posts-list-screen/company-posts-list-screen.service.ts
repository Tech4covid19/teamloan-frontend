import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { Posting } from 'src/app/models/posting/posting';
import { PostingService } from 'src/app/services/posting/posting.service';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';
import { AuthService } from 'src/app/services/auth/auth.service';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class CompanyPostsListScreenService extends AbsctractPostsListService {
    constructor(private postingService: PostingService, private authService: AuthService) {
        super();
    }

    public getPosting(filters: QueryFilterInterface): Observable<Posting[]> {
        return this.authService
            .getAuthUser()
            .pipe(switchMap(user => this.postingService.getPosting(filters, user.uuid)));
    }
}

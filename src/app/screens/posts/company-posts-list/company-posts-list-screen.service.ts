import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Injectable()
export class CompanyPostsListScreenService extends AbsctractPostsListService {
    constructor(private postingService: PostingService, private authUserService: AuthUserService) {
        super();
    }

    public getPosting(filters: QueryFilterInterface): Observable<Posting[]> {
        return this.authUserService
            .getAuthUser()
            .pipe(switchMap(user => this.postingService.getPosting(filters, user.uuid)));
    }
}

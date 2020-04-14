import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { ACTIONS } from 'src/app/material/post-card/post-card.component';
import { INTENT, Posting } from 'src/app/models/posting/posting';
import { PostingService } from 'src/app/services/posting/posting.service';
import {
    QueryFilterInterface,
    QUERY_FILTER_PARAMETERS
} from 'src/app/services/posting/query-filter';

@Component({
    selector: 'app-posts-list-screen',
    templateUrl: './posts-list-screen.component.html',
    styleUrls: ['./posts-list-screen.component.scss']
})
export class PostsListScreenComponent implements OnDestroy {
    public actions = [ACTIONS.CONTACT, ACTIONS.SHARE];

    public posts: Posting[] = [];

    private _subject$ = new Subject();

    constructor(
        private postingService: PostingService,
        private postsListFilterService: PostsListFilterService
    ) {
        this._onFilterAction();
        this.postsListFilterService
            .onFilter()
            .pipe(takeUntil(this._subject$))
            .subscribe(filter => this._onFilterAction(filter));
    }

    ngOnDestroy() {
        this._subject$.next();
        this._subject$.complete();
    }

    private _onFilterAction(filters?: QueryFilterInterface) {
        filters = {
            [QUERY_FILTER_PARAMETERS.INTENT]: INTENT.LEND,
            [QUERY_FILTER_PARAMETERS.DISTRICT]: '4f6808ad-8b20-e5b5-48cb-438b3a229cd8'
            // [QUERY_FILTER_PARAMETERS.BUSINESS_AREA]: 'f55d41b7-3d6d-42aa-86a1-226d98216093'
            // [QUERY_FILTER_PARAMETERS.MUNICIPALITY]: 'c633949e-7493-e1e3-a50f-1a96307cc20d'
        };

        this.postingService.getPosting(filters).subscribe(
            posts => this._onPostingResponse(posts),
            error => this._onPostingResponse(null, error)
        );
    }

    private _onPostingResponse(posts: Posting[], _error?: any) {
        this.posts = posts ? posts : [];
    }
}

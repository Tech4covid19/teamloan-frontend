import { Component, Input } from '@angular/core';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { Posting } from 'src/app/models/posting/posting';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
    @Input()
    public businessAreaOptions: InputSelectOption[] = [];

    @Input()
    public districtOptions: InputSelectOption[] = [];

    @Input()
    public municipalityOptions: InputSelectOption[] = [];

    @Input()
    public jobsOptions: InputSelectOption[] = [];

    @Input()
    public actions: string[];

    @Input()
    public set posts(posts: Posting[]) {
        this._posts = posts;
        this._parsePosts(posts);
    }
    public get posts(): Posting[] {
        return this._posts;
    }

    public postsList = [];

    private _posts: Posting[];

    constructor(private postsListFilterService: PostsListFilterService) {}

    public filter(query: QueryFilterInterface) {
        this.postsListFilterService.filter(query);
    }

    private _parsePosts(posts: Posting[]) {
        this.postsList = posts.map(post => ({
            cover: this._getCoverUrl(post.district.name),
            title: post.district.name,
            amount: post.jobs.length,
            subTitle: post.company['business-area'].name
        }));
    }

    private _getCoverUrl(districtName: string): string {
        districtName = districtName.toLowerCase().replace(/ /g, '_');
        return `/assets/img/districts/${districtName}.jpg`;
    }
}

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
    public posts: Posting[];

    public postsList = [];
}

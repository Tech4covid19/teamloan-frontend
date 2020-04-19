import { Component } from '@angular/core';
import { AbstractPostsList } from 'src/app/components/posts-list/abstract-posts-list';
import { ACTIONS } from 'src/app/material/post-card/post-card.component';

@Component({
    selector: 'app-company-posts-list-screen',
    templateUrl: './company-posts-list-screen.component.html',
    styleUrls: ['./company-posts-list-screen.component.scss']
})
export class CompanyPostsListScreenComponent extends AbstractPostsList {
    public actions = [];
}

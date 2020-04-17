import { Component } from '@angular/core';
import { AbstractPostsList } from 'src/app/components/posts-list/abstract-posts-list';
import { ACTIONS } from 'src/app/material/post-card/post-card.component';

@Component({
    selector: 'app-posts-list-screen',
    templateUrl: './posts-list-screen.component.html',
    styleUrls: ['./posts-list-screen.component.scss']
})
export class PostsListScreenComponent extends AbstractPostsList {
    public actions = [ACTIONS.CONTACT, ACTIONS.SHARE];
}

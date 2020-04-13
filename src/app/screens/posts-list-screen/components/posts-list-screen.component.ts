import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-posts-list-screen',
    templateUrl: './posts-list-screen.component.html',
    styleUrls: ['./posts-list-screen.component.scss']
})
export class PostsListScreenComponent {
    public actions = ['contact', 'share'];

    public postsList = [];

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.postsList.push({
                cover: '/assets/img/post-card/bg-idanha-a-nova.svg',
                title: 'Idanha-a-nova',
                amount: '7',
                subTitle: 'Hoterlaria'
            });
        }
    }
}

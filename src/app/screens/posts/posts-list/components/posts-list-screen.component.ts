import { Component } from '@angular/core';
import { AbstractPostsList } from 'src/app/components/posts-list/abstract-posts-list';
import { INTENT } from 'src/app/models/intent.enum';

@Component({
    selector: 'app-posts-list-screen',
    templateUrl: './posts-list-screen.component.html',
    styleUrls: ['./posts-list-screen.component.scss']
})
export class PostsListScreenComponent extends AbstractPostsList {
    public actions = [];

    protected getTitle(intent: INTENT): string {
        if (intent == INTENT.LEND) {
            return 'Equipas Disponíveis';
        } else if (intent == INTENT.SEEK) {
            return 'Pedidos de Equipas';
        }
    }
}

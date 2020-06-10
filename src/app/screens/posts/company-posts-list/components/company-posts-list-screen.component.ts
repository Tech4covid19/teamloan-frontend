import { Component } from '@angular/core';
import { AbstractPostsList } from 'src/app/components/posts-list/abstract-posts-list';
import { INTENT } from 'src/app/models/intent.enum';

@Component({
    selector: 'app-company-posts-list-screen',
    templateUrl: './company-posts-list-screen.component.html',
    styleUrls: ['./company-posts-list-screen.component.scss']
})
export class CompanyPostsListScreenComponent extends AbstractPostsList {
    public actions = [];

    protected getTitle(intent: INTENT): string {
        if (intent == INTENT.LEND) {
            return 'As minhas equipas';
        } else if (intent == INTENT.SEEK) {
            return 'Os meus pedidos';
        }
    }
}

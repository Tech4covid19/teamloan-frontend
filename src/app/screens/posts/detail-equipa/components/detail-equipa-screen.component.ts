import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { INTENT } from 'src/app/models/intent.enum';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';

@Component({
    selector: 'app-detail-equipa-screen',
    templateUrl: './detail-equipa-screen.component.html',
    styleUrls: ['./detail-equipa-screen.component.scss']
})
export class DetailEquipaScreenComponent {
    public hasPermission$: Observable<boolean>;

    public url: string;

    public posting: Posting;

    public intents = INTENT;

    constructor(private activatedRoute: ActivatedRoute, private authUser: AuthUserService) {
        this.posting = this.activatedRoute.snapshot.data.posting;
        this.hasPermission$ = this.hasPermissionToEdit(this.posting);
        this.url = this.getUrl(this.posting);
    }

    private hasPermissionToEdit(posting: Posting): Observable<boolean> {
        return this.authUser
            .getAuthUser()
            .pipe(map((user: AuthUser) => posting.company.uuid === user.uuid));
    }

    private getUrl(posting: Posting) {
        return `/posts/private/${posting.uuid}/edit`;
    }
}

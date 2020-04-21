import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { map } from 'rxjs/operators';
import { EquipaConverters } from 'src/app/screens/equipas/converters/equipa.converters';

@Component({
    selector: 'app-detail-equipa-screen',
    templateUrl: './detail-equipa-screen.component.html',
    styleUrls: ['./detail-equipa-screen.component.scss']
})
export class DetailEquipaScreenComponent {
    public hasPermission$: Observable<boolean>;

    public url: string;

    public posting: Posting;

    constructor(private activatedRoute: ActivatedRoute, private authUser: AuthUserService) {
        this.posting = this.activatedRoute.snapshot.data.posting;
        // console.log('aaaa', this.posting);
        // this.initialValue = EquipaConverters.postingToEquipaViewModel(posting);
        console.log(EquipaConverters.postingToEquipaViewModel(this.posting));
        this.hasPermission$ = this.hasPermissionToEdit(this.posting);
        this.url = this.getUrl(this.posting);
    }

    private hasPermissionToEdit(posting: Posting): Observable<boolean> {
        return this.authUser
            .getAuthUser()
            .pipe(map((user: AuthUser) => posting.company.uuid === user.uuid));
    }

    private getUrl(posting: Posting) {
        return `/equipas/${posting.uuid}/edit`;
    }
}

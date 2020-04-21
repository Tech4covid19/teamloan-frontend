import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';
import { EquipaConverters } from '../../../converters/equipa.converters';

@Component({
    selector: 'app-readonly-equipa-view',
    templateUrl: './readonly-equipa-view.component.html',
    styleUrls: ['./readonly-equipa-view.component.scss']
})
export class ReadonlyEquipaViewComponent {

    public initialValue: EquipaViewModel = null;

    public hasPermission$: Observable<boolean>;

    public url: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private authUser: AuthUserService
    ) {
        const posting: Posting = this.activatedRoute.snapshot.data.posting;
        this.initialValue = EquipaConverters.postingToEquipaViewModel(posting);
        this.hasPermission$ = this.hasPermissionToEdit(posting);
        this.url = this.getUrl(posting);
    }

    private hasPermissionToEdit(posting: Posting): Observable<boolean> {
        return this.authUser.getAuthUser().pipe(
            map((user: AuthUser) => posting.company.uuid === user.uuid)
        );
    }

    private getUrl(posting: Posting) {
        return `/equipas/${posting.uuid}/edit`;
    }
}


import { Component, ViewChild } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaFormContainerComponent } from '../../../components/equipa-form-container/equipa-form.container';
import { EquipaConverters } from '../../../converters/equipa.converters';
import { Posting } from 'src/app/models/posting/posting';
import { ActivatedRoute } from '@angular/router';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';

@Component({
    selector: 'app-edit-equipa-view',
    templateUrl: './edit-equipa-view.component.html',
    styleUrls: ['./edit-equipa-view.component.scss']
})
export class EditEquipaViewComponent {

    @ViewChild(EquipaFormContainerComponent) formContainer: EquipaFormContainerComponent;

    public initialValue: EquipaViewModel = null;

    private currentPosting: Posting;

    constructor(
        private activatedRoute: ActivatedRoute,
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) {
        this.currentPosting = this.activatedRoute.snapshot.data.posting;
        this.initialValue = EquipaConverters.postingToEquipaViewModel(this.currentPosting);
    }

    public submit() {
        const value = this.formContainer.submit();
        debugger;
        if ( !value ) {
            return;
        }
        this.authUserService.getAuthUser()
        .pipe(
            mergeMap(user => this.postingService.update(
                this.currentPosting.uuid,
                user.uuid,
                EquipaConverters.equipaViewModelToPosting(value)
            ))
        )
        .subscribe((resp) => {
            debugger;
        }, (err) => {
            debugger;
        });
    }

    public deleteTeam() {
    }

}

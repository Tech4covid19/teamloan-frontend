import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ICON_STATUS } from 'src/app/material/button/button.component';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaFormContainerComponent } from '../../../components/equipa-form-container/equipa-form.container';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';
import { EquipaConverters } from '../../../converters/equipa.converters';
import { UUID } from 'src/app/models/uuid-object';

@Component({
    selector: 'app-edit-equipa-view',
    templateUrl: './edit-equipa-view.component.html',
    styleUrls: ['./edit-equipa-view.component.scss']
})
export class EditEquipaViewComponent {
    @ViewChild(EquipaFormContainerComponent) formContainer: EquipaFormContainerComponent;

    public initialValue: EquipaViewModel = null;

    public buttonStatus = ICON_STATUS;

    public submitting = false;

    public reponseError = false;

    private currentPosting: Posting;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) {
        this.currentPosting = this.activatedRoute.snapshot.data.posting;
        this.initialValue = EquipaConverters.postingToEquipaViewModel(this.currentPosting);
    }

    public submit() {
        this.reponseError = false;
        const value = this.formContainer.submit();

        if (value && !this.submitting) {
            this._updatePost(value);
        }
    }

    private _updatePost(value: EquipaViewModel) {
        this.submitting = true;
        this.authUserService
            .getAuthUser()
            .pipe(
                mergeMap(user =>
                    this.postingService.update(
                        this.currentPosting.uuid,
                        user.uuid,
                        EquipaConverters.equipaViewModelToPosting(value)
                    )
                )
            )
            .subscribe(
                uuid => this._onSaveResponse(uuid),
                _ => this._onSaveResponse(null)
            );
    }

    private _onSaveResponse(uuid: UUID) {
        this.submitting = false;

        if (uuid) {
            this.router.navigate([`/posts/private`]);
        } else {
            this.reponseError = true;
        }
    }
}

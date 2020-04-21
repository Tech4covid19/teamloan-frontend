import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ICON_STATUS } from 'src/app/material/button/button.component';
import { UUID } from 'src/app/models/uuid-object';
import { EquipaViewModel } from 'src/app/screens/equipas/components/equipa-form/equipa.viewmodel';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaFormContainerComponent } from '../../../components/equipa-form-container/equipa-form.container';
import { EquipaConverters } from '../../../converters/equipa.converters';

@Component({
    selector: 'app-add-equipa-view',
    templateUrl: './add-equipa-view.component.html',
    styleUrls: ['./add-equipa-view.component.scss']
})
export class AddEquipaViewComponent {
    @ViewChild(EquipaFormContainerComponent) formContainer: EquipaFormContainerComponent;

    public initialValue = null;

    public buttonStatus = ICON_STATUS;

    public submitting = false;

    public reponseError = false;

    constructor(
        private router: Router,
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) {}

    public submit() {
        this.reponseError = false;
        const value = this.formContainer.submit();

        if (value && !this.submitting) {
            this._createPost(value);
        }
    }

    private _createPost(value: EquipaViewModel) {
        this.submitting = true;
        this.authUserService
            .getAuthUser()
            .pipe(
                mergeMap(user =>
                    this.postingService.save(
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
            this.router.navigate([`/equipas/${uuid.uuid}/details`]);
        } else {
            this.reponseError = true;
        }
    }
}

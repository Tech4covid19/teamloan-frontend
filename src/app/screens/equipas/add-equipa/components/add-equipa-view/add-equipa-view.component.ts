import { Component, ViewChild } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { District } from 'src/app/models/district/district';
import { INTENT } from 'src/app/models/intent.enum';
import { Job } from 'src/app/models/jobs/job';
import { Jobs } from 'src/app/models/jobs/jobs';
import { Municipality } from 'src/app/models/municipality/municipality';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaFormContainerComponent } from '../../../components/equipa-form-container/equipa-form.container';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';
import { EquipaConverters } from '../../../converters/equipa.converters';

@Component({
    selector: 'app-add-equipa-view',
    templateUrl: './add-equipa-view.component.html',
    styleUrls: ['./add-equipa-view.component.scss']
})
export class AddEquipaViewComponent {

    @ViewChild(EquipaFormContainerComponent) formContainer: EquipaFormContainerComponent;

    public initialValue = null;

    constructor(
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) {
    }

    public submit() {
        const value = this.formContainer.submit();
        debugger;
        if ( !value ) {
            return;
        }
        this.authUserService.getAuthUser()
        .pipe(
            mergeMap(user => this.postingService.save(
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

}

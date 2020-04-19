import { Component, ViewChild } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaFormContainerComponent } from '../../../components/equipa-form-container/equipa-form.container';
import { EquipaConverters } from '../../../converters/equipa.converters';

@Component({
    selector: 'app-edit-equipa-view',
    templateUrl: './edit-equipa-view.component.html',
    styleUrls: ['./edit-equipa-view.component.scss']
})
export class EditEquipaViewComponent {

    @ViewChild(EquipaFormContainerComponent) formContainer: EquipaFormContainerComponent;

    public initialValue = {
        distrito: '1db42e06-4f0d-b121-a428-f81d8ed40fba', // aveiro
        concelho: '58afc4d6-32ab-47c0-b659-5647fb3a437b', // anadia
        nome: 'teste nome',
        jobsData: { jobs: [
            { job: 'b200e7be-0c3b-4502-8d7e-e461e7fdb452', quantity: 1, last: false },
            { job: '9567032c-78b3-407b-b162-8ce9ee09fdf3', quantity: 2, last: true }
        ] },
        obs: 'dsdas'
    };

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

    public deleteTeam() {
    }

}

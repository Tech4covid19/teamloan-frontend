import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { FormNotifier, FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { District } from 'src/app/models/district/district';
import { INTENT } from 'src/app/models/intent.enum';
import { Job } from 'src/app/models/jobs/job';
import { Jobs } from 'src/app/models/jobs/jobs';
import { Municipality } from 'src/app/models/municipality/municipality';
import { Posting } from 'src/app/models/posting/posting';
import { ResourceInterface } from 'src/app/models/resource.interface';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { DistrictService } from 'src/app/services/district/district.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { MunicipalityService } from 'src/app/services/municipality/municipality.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';

@Component({
    selector: 'app-add-equipa-view',
    templateUrl: './add-equipa-view.component.html',
    styleUrls: ['./add-equipa-view.component.scss']
})
export class AddEquipaViewComponent {

    public form: FormGroup;
    public notifier: FormNotifier;

    public districtOptions$: Observable<InputSelectOption[]> = new Observable();

    public municipalityOptions$: Observable<InputSelectOption[]> = new Observable();

    public jobsOptions$: Observable<InputSelectOption[]> = new Observable();

    public jobsArray = [
        { job: 'b200e7be-0c3b-4502-8d7e-e461e7fdb452', quantity: 1, last: false },
        { job: '9567032c-78b3-407b-b162-8ce9ee09fdf3', quantity: 2, last: true },
    ];

    /*+
    0: {name: "Administrativo", uuid: "b200e7be-0c3b-4502-8d7e-e461e7fdb452"}
1: {name: "Advogado", uuid: "9567032c-78b3-407b-b162-8ce9ee09fdf3"}
2: {name: "Agente", uuid: "1063a037-fac3-4ea5-9ea9-328ec3ade3f9"}
    */

    constructor(
        private fb: FormBuilder, 
        private formNotifierFactory: FormNotifierFactory,
        private districtService: DistrictService,
        private municipalityService: MunicipalityService,
        private jobsService: JobsService,
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) {
        this.form = this.getForm();
        this.notifier = this.formNotifierFactory.create();
        this._fetchDistrict();
        this._fetchJobs();
    }

    public submit() {
        console.log('form', this.form);
        this.notifier.triggerValidation();
        if ( this.form.invalid ) {
            return;
        }
        this.authUserService.getAuthUser()
        .pipe(
            mergeMap(user => this.postingService.save(
                user.uuid,
                this.getPosting(this.form.value.equipa)
            ))
        )
        .subscribe((resp) => {
            debugger;
        }, (err) => {
            debugger;
        });
    }

    public onDistrictChange(uuid: string) {
        debugger;
        this._fetchMunicipalities(uuid);
    }

    private getForm(): FormGroup {
        return this.fb.group({
            equipa: null,
        });
        /*return this.fb.group({
            equipa: {
                distrito: 'testdistrict',
                concelho: 'testeconcelho',
                nome: 'teste nome',
                jobsData: { jobs: this.jobsArray }
            },
        });*/
    }

    private _fetchDistrict() {
        this.districtOptions$ = this.districtService
            .get()
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _fetchMunicipalities(districtId: string) {
        this.municipalityOptions$ = this.municipalityService
            .get(districtId)
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _fetchJobs() {
        this.jobsOptions$ = this.jobsService
            .get()
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _getInputSelectOptions(businessAreas: ResourceInterface[]): InputSelectOption[] {
        return businessAreas.map(item => ({
            key: item.uuid,
            label: item.name
        }));
    }

    private getPosting(equipaViewModel: EquipaViewModel): Posting {
        const posting = new Posting({
            title: equipaViewModel.nome,
            district: new District({
                // name: '',
                uuid: equipaViewModel.distrito
            }),
            municipality: new Municipality({
                uuid: equipaViewModel.concelho
            }),
            intent: INTENT.LEND,
            jobs: equipaViewModel.jobsData.jobs
            .filter(j => j.job && j.quantity)
            .map(j => {
                return new Jobs({
                    job: new Job({
                        // name: '',
                        uuid: j.job
                    }),
                    'number-of-people': j.quantity,
                });
            })
        });
        return posting;
    }

}

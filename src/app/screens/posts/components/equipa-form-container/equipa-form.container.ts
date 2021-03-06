import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    FormNotifier,
    FormNotifierFactory
} from 'src/app/form-tools/validators/form-notifier.factory';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { DistrictService } from 'src/app/services/district/district.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { MunicipalityService } from 'src/app/services/municipality/municipality.service';
import { getInputSelectOptions } from 'src/app/utils/input-select-option.utils';
import { EquipaViewModel } from '../equipa-form/equipa.viewmodel';

export abstract class FormContainer {
    public abstract submit(): any;
}

@Component({
    selector: 'app-equipa-form-container',
    templateUrl: './equipa-form.container.html',
    styleUrls: ['./equipa-form.container.scss']
})
export class EquipaFormContainerComponent {
    public notifier: FormNotifier;

    public districtOptions$: Observable<InputSelectOption[]> = new Observable();

    public municipalityOptions$: Observable<InputSelectOption[]> = new Observable();

    public jobsOptions$: Observable<InputSelectOption[]> = new Observable();

    private _initialValue: EquipaViewModel;

    @Input()
    public set initialValue(initialValue) {
        this._initialValue = initialValue;
        this.form = this.getForm();
    }

    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private formNotifierFactory: FormNotifierFactory,
        private districtService: DistrictService,
        private municipalityService: MunicipalityService,
        private jobsService: JobsService
    ) {
        this.notifier = this.formNotifierFactory.create();
        this._fetchDistrict();
        this._fetchJobs();
    }

    public submit(): EquipaViewModel {
        this.notifier.triggerValidation();
        if (this.form.valid) {
            return this.form.value.equipa;
        }
        return null;
    }

    public onDistrictChange(uuid: string) {
        this._fetchMunicipalities(uuid);
    }

    private getForm(): FormGroup {
        return this.fb.group({
            equipa: this._initialValue
        });
    }

    private _fetchDistrict() {
        this.districtOptions$ = this.districtService
            .get()
            .pipe(map(items => getInputSelectOptions(items)));
    }

    private _fetchMunicipalities(districtId: string) {
        if (!districtId) {
            this.municipalityOptions$ = of([]);
        }
        this.municipalityOptions$ = this.municipalityService
            .get(districtId)
            .pipe(map(items => getInputSelectOptions(items)));
    }

    private _fetchJobs() {
        this.jobsOptions$ = this.jobsService.get().pipe(map(items => getInputSelectOptions(items)));
    }
}

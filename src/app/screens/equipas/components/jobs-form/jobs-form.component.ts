import { Component, forwardRef, Inject, OnInit, Input } from '@angular/core';
import { FormArray, NG_VALUE_ACCESSOR, FormGroup, FormControl, NG_VALIDATORS, Form, AbstractControl } from '@angular/forms';
import { FormGeneratorService, FormGeneratorServiceToken } from 'src/app/form-tools/interfaces/form-generator.interface';
import { ArrayFormValueAccessor } from 'src/app/form-tools/value-accessors/array-form.value.accessor';
import { JobsFormService } from './jobs-form.service';
import { JobsViewModel } from './jobs.viewmodel';
import { FormNotifier } from 'src/app/form-tools/validators/form-notifier.factory';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@Component({
    selector: 'app-jobs-form',
    templateUrl: './jobs-form.component.html',
    styleUrls: ['./jobs-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => JobsFormComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => JobsFormComponent),
            multi: true
        },
        {
            provide: FormGeneratorServiceToken,
            useClass: JobsFormService
        }
    ]
})
export class JobsFormComponent extends ArrayFormValueAccessor<JobsViewModel> implements OnInit {

    public errors = {};
    public formArrayName = 'jobs';
    public jobs;

    @Input()
    public notifier: FormNotifier;

    @Input()
    public jobOptions: InputSelectOption[];

    constructor(
        @Inject(FormGeneratorServiceToken) jobsFormService: FormGeneratorService, 
        private formControlConfig: FormControlConfig
    ) {
        super(jobsFormService);
        this.jobs = this.form.get('jobs') as FormArray;
    }

    ngOnInit() {
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { jobs: true };
    }

    public remove(index) {

        if ( this.formControlConfig.isDisabled() ) {
            return;
        }

        const fg: FormArray = this.form.get(this.formArrayName) as FormArray;

        if ( fg.controls.length > 1 ) {
            fg.removeAt(index);
            if ( this.hasValue( fg.controls[fg.controls.length - 1] ) ) {
                this.onJobInserted(fg.controls.length - 1);
            }
        }
    }

    public onJobInserted(index) {
        const fg: any = this.form.get(this.formArrayName);
        if ( index ===  (fg.controls.length - 1) ) {
            fg.setControl(fg.controls.length, new FormControl({ job: null, quantity: 1, last: true }));
        }
    }

    public getErrors() {
        return this.errors;
    }

    public getFormArrayName() {
        return this.formArrayName;
    }

    private hasValue(fc: AbstractControl) {
        if ( fc.value.job && fc.value.quantity ) {
            return true;
        }
        return false;
    }
}

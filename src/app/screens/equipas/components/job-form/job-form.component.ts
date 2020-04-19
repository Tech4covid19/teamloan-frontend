import { Component, EventEmitter, forwardRef, Inject, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { FormGeneratorService, FormGeneratorServiceToken } from 'src/app/form-tools/interfaces/form-generator.interface';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { JobFormService } from './job-form.service';
import { JobViewModel } from './job.viewmodel';

@Component({
    selector: 'app-job-form',
    templateUrl: './job-form.component.html',
    styleUrls: ['./job-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => JobFormComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => JobFormComponent),
            multi: true
        },
        {
            provide: FormGeneratorServiceToken,
            useClass: JobFormService
        }
    ]
})
export class JobFormComponent extends SimpleFormValueAccessor<JobViewModel> implements OnChanges, OnDestroy {

    @Output()
    public jobInsertEvent: EventEmitter<any> = new EventEmitter();

    @Input()
    public isLast: boolean;

    @Input()
    public jobOptions: InputSelectOption[] = [];

    public errors = {
        job: {
            required: false
        },
        quantity: {
            required: false
        }
    };

    constructor(@Inject(FormGeneratorServiceToken)  jobFormService: FormGeneratorService) {
        super(jobFormService);
        this.subscriptions.push(
            this.form.valueChanges
            .pipe(debounceTime(1000), filter((d) => this.isFormFull(d)))
            .subscribe((data) => {
                this.jobInsertEvent.emit();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    ngOnChanges(changes) {
        if ( changes.isLast !== undefined ) {
            this.form.get('last').patchValue(this.isLast);
        }
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { job: true };
    }

    public getErrors() {
        return this.errors;
    }

    private isFormFull(data) {
        if ( data.job && data.quantity ) {
            return true;
        }
        return false;
    }
}

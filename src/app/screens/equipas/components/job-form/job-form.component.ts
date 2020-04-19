import { Component, forwardRef, Inject, Input, EventEmitter, Output, OnChanges, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { FormGeneratorService, FormGeneratorServiceToken } from 'src/app/form-tools/interfaces/form-generator.interface';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { JobFormService } from './job-form.service';
import { JobViewModel } from './job.viewmodel';
import { filter, debounce, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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

    public errors = {
        name: {
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

    ngOnChanges() {
        this.form.get('last').patchValue(this.isLast);
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { job: true };
    }

    public getErrors() {
        return this.errors;
    }

    private isFormFull(data) {
        if (
            this.isTouched('name')
        ) {
            if ( data.name && data.quantity ) {
                return true;
            }
        }
        return false;
    }

    private isTouched(name: string) {
        return this.form.get(name).touched;
    }
}

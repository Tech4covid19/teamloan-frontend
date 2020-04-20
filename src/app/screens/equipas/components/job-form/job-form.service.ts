import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';
import { JobViewModel } from './job.viewmodel';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@Injectable()
export class JobFormService implements FormGeneratorService {
    constructor(
        private fb: FormBuilder,
        private formConfig: FormControlConfig
    ) {}

    public getForm(): FormGroup {
        return this.fb.group({
            job: [this.formConfig.get(null), requiredOnlyIfNotLast('last')],
            quantity: [this.formConfig.get(1), requiredOnlyIfNotLast('last')],
            last: [false]
        });
    }
}

function requiredOnlyIfNotLast(lastAttributeName: string) {
    return (fc: FormControl) => {
        if ( !fc.parent ) {
            return Validators.required(fc);
        }
        // job form doesnt need to be validated in case is the last one
        if ( fc.parent.get(lastAttributeName).value === true ) {
            return null;
        }
        return Validators.required(fc);
    };
}

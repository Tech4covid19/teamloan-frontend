import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';

@Injectable()
export class JobFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    public getForm(): FormGroup {
        return this.fb.group({
            job: [null, requiredOnlyIfNotLast('last')],
            quantity: [1, requiredOnlyIfNotLast('last')],
            last: [false]
        });
    }
}

function requiredOnlyIfNotLast(lastAttributeName: string) {
    return (fc: FormControl) => {
        if (!fc.parent) {
            return Validators.required(fc);
        }
        // job form doesnt need to be validated in case is the last one
        if (fc.parent.get(lastAttributeName).value === true) {
            return null;
        }
        return Validators.required(fc);
    };
}

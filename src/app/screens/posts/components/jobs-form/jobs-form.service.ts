import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';

@Injectable()
export class JobsFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    public getForm(): FormGroup {
        return this.fb.group({
            jobs: new FormArray(this.initialValue())
        }, {
            validator: minimumItems('jobs', 1)
        });
    }

    private initialValue(): FormControl[] {
        return [
            new FormControl({
                job: null,
                quantity: 1
            })
        ];
    }
}

function minimumItems(attrName: string, minimumQuantity: number) {
    return (formGroup: FormGroup) => {

        const formArray = formGroup.get(attrName) as FormArray;
        const valids = formArray.controls.map(c => c.valid);
        if ( valids.length >= minimumQuantity ) {
            return null;
        }
        return {
            minimum: true
        };
    };
}

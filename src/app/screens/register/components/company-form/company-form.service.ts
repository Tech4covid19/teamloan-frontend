import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';
import { NIFValidator } from 'src/app/form-tools/validators/nif.validator';
import { PostalCodeValidator } from 'src/app/form-tools/validators/postal-code.validator';

@Injectable()
export class CompanyFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    public getForm(): FormGroup {
        return this.fb.group({
            name: ['', Validators.required ],
            nif: ['', Validators.compose( [ Validators.required, NIFValidator ] ) ],
            businessArea: ['', Validators.required ],
            address: ['', Validators.required ],
            city: ['', Validators.required ],
            postalCode: ['', Validators.compose( [ Validators.required, PostalCodeValidator ] ) ]
        });
    }
}

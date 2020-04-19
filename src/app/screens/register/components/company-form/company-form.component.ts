import { Component, forwardRef, Inject, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    FormGeneratorService,
    FormGeneratorServiceToken
} from 'src/app/form-tools/interfaces/form-generator.interface';
import { FormValidatorHandler } from 'src/app/form-tools/validators/form-validator.handler';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { CompanyViewModel } from '../../register-user.viewmodel';
import { CompanyFormService } from './company-form.service';
import { INTENT } from 'src/app/models/intent.enum';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CompanyFormComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CompanyFormComponent),
            multi: true
        },
        {
            provide: FormGeneratorServiceToken,
            useClass: CompanyFormService
        }
    ]
})
export class CompanyFormComponent extends SimpleFormValueAccessor<CompanyViewModel> {
    @Input()
    public businessAreas: InputSelectOption[];

    public intents: InputSelectOption[] = [
        {
            key: INTENT.LEND,
            label: 'Disponibilizar equipa'
        },
        {
            key: INTENT.SEEK,
            label: 'Procurar equipa'
        },
        {
            key: INTENT.BOTH,
            label: 'Ambos'
        }
    ];

    public errors = {
        name: {
            required: false
        },
        nif: {
            required: false,
            format: false
        },
        postalCode: {
            required: false,
            format: false
        },
        intent: {
            required: false
        },
        businessArea: {
            required: false
        }
    };

    constructor(@Inject(FormGeneratorServiceToken) companyFormService: FormGeneratorService) {
        super(companyFormService);
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { company: { valid: false } };
    }

    public getErrors() {
        return this.errors;
    }
}

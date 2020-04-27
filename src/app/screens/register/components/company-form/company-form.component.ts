import { Component, forwardRef, Inject, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    FormGeneratorService,
    FormGeneratorServiceToken
} from 'src/app/form-tools/interfaces/form-generator.interface';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { CompanyViewModel } from '../../register-user.viewmodel';
import { CompanyFormService } from './company-form.service';
import { INTENT } from 'src/app/models/intent.enum';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
export class CompanyFormComponent extends SimpleFormValueAccessor<CompanyViewModel>
    implements OnInit {
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

    private _subscriptions = new Subject();

    constructor(@Inject(FormGeneratorServiceToken) companyFormService: FormGeneratorService) {
        super(companyFormService);
    }

    ngOnInit() {
        this.form
            .get('postalCode')
            .valueChanges.pipe(takeUntil(this._subscriptions))
            .subscribe(value => {
                console.log(value);
                this._applyZipCodeMask(value);
            });
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { company: { valid: false } };
    }

    public getErrors() {
        return this.errors;
    }

    private _applyZipCodeMask(zipCode: string) {
        const regex = /^\d{4,7}$/;
        if (regex.test(zipCode)) {
            this.form
                .get('postalCode')
                .setValue(zipCode.substring(0, 4) + '-' + zipCode.substring(4), {
                    emitEvent: false
                });
        }
    }
}

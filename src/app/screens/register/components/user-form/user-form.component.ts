import { Component, forwardRef, Inject } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormGeneratorService, FormGeneratorServiceToken } from 'src/app/form-tools/interfaces/form-generator.interface';
import { FormValidatorHandler } from 'src/app/form-tools/validators/form-validator.handler';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { UserViewModel } from '../../register-user.viewmodel';
import { UserFormService } from './user-form.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserFormComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UserFormComponent),
            multi: true
        },
        {
            provide: FormGeneratorServiceToken,
            useClass: UserFormService
        }
    ]
})
export class UserFormComponent extends SimpleFormValueAccessor<UserViewModel> {

    public errors = {
        phone: {
            required: false,
            format: false
        },
        email: {
            required: false,
            format: false
        },
        password: {
            required: false,
            format: false
        }
    };

    constructor(@Inject(FormGeneratorServiceToken) userFormService: FormGeneratorService) {
        super(userFormService);
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { user: { valid: false } };
    }

    getErrors() {
        return this.errors;
    }
}

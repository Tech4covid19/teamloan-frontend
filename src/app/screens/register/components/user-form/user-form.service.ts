import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';
import { PasswordFormatValidator } from 'src/app/form-tools/validators/password-format.validator';
import { PhoneValidator } from 'src/app/form-tools/validators/phone.validator';
import { EmailValidator } from 'src/app/form-tools/validators/email.validator';
import { MatchValidator } from 'src/app/form-tools/validators/match.validator';

@Injectable()
export class UserFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    public getForm(): FormGroup {
        return this.fb.group(
            {
                phone: ['', Validators.compose([Validators.required, PhoneValidator])],
                email: ['', Validators.compose([Validators.required, EmailValidator])],
                password: ['', Validators.compose([Validators.required, PasswordFormatValidator])],
                confirmPassword: ['', Validators.required]
            },
            { validator: MatchValidator('password', 'confirmPassword') }
        );
    }
}

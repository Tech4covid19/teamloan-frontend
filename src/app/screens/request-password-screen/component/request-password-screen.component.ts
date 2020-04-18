import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { EmailValidator } from 'src/app/form-tools/validators/email.validator';
import { CompanyService } from 'src/app/services/company/company.service';
import { OnSubmitEvent } from '../../register/components/register-form/register-form.component';
import { Router } from '@angular/router';

export interface RequestPasswordOutcome {
    emailFound: boolean;
    emailToResetPasswordSent: boolean;
}

@Component({
    selector: 'app-request-password-screen',
    templateUrl: './request-password-screen.component.html',
    styleUrls: ['./request-password-screen.component.scss']
})
export class RequestPasswordViewComponent {
    public form: FormGroup;

    public emailNotFound = false;

    public buttonTheme = THEME;

    public submitted = false;

    public submitting = false;

    public buttonStatus: string = ICON_STATUS.LOADING;

    constructor(
        private fb: FormBuilder,
        private companiesService: CompanyService,
        private router: Router
    ) {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, EmailValidator])]
        });
    }

    public get emailControl(): FormControl {
        return this.form.get('email') as FormControl;
    }

    public onSubmit(submitEvent: OnSubmitEvent) {
        this.submitted = true;
        console.log(this.emailControl.errors);
        if (!this.submitting && this.form.valid) {
            this.submitting = true;
            // subscribe service here
            // on success show confirmation window
            // on error show  confirmation window with the error
            //example:
            //   this.authService.authenticate(this.form.value).subscribe(
            //     data => this._onLoginSuccess(),
            //     error => this._onLoginError()
            // );

            const email = this.form.value.email;

            this.companiesService
                .requestPassword(email)
                .pipe(tap(() => submitEvent.callback()))
                .subscribe(
                    resp => this.redirectToConfirmPage(email),
                    err => submitEvent.callback(err)
                );
        }
    }

    private _onPasswordRequestSuccess() {
        // const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.emailNotFound = false;
        // this.router.navigate([returnUrl]);
    }

    private _onPasswordRequestError() {
        this.submitting = false;
        this.emailNotFound = true;
    }

    private redirectToConfirmPage(email: string) {
        this.router.navigateByUrl('/confirmation', { state: { email: email } });
    }
}

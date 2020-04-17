import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { EmailValidator } from 'src/app/form-tools/validators/email.validator';

@Component({
    selector: 'app-reset-password-screen',
    templateUrl: './reset-password-screen.component.html',
    styleUrls: ['./reset-password-screen.component.scss']
})
export class ResetPasswordViewComponent implements OnInit {
    public form: FormGroup;

    public emailNotFound = false;

    public buttonTheme = THEME;

    public submitted = false;

    public submitting = false;

    public buttonStatus: string = ICON_STATUS.LOADING;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, EmailValidator])]
        });
    }

    ngOnInit(): void {}

    public get emailControl(): FormControl {
        return this.form.get('email') as FormControl;
    }

    public onSubmit() {
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
        }
    }

    private _onPasswordResetSuccess() {
        // const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.emailNotFound = false;
        // this.router.navigate([returnUrl]);
    }

    private _onPasswordResetError() {
        this.submitting = false;
        this.emailNotFound = true;
    }
}

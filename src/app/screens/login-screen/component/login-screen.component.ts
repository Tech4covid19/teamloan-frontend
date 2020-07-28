import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { AuthenticationStrategy } from 'src/app/services/auth/interfaces/authentication.strategy';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss']
})
export class LoginViewComponent {
    public form: FormGroup;

    public loginError = false;

    public loginErrorMessage: string;

    public buttonTheme = THEME;

    public submitted = false;

    public submitting = false;

    public buttonStatus: string = ICON_STATUS.LOADING;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthenticationStrategy
    ) {
        this.form = this.fb.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });

        this.form.valueChanges.subscribe(f => this._resetValidators());
    }

    public get usernameControl(): FormControl {
        return this.form.get('username') as FormControl;
    }

    public get passwordControl(): FormControl {
        return this.form.get('password') as FormControl;
    }

    public onSubmit() {
        this.submitted = true;

        if (!this.submitting && this.form.valid) {
            this._authenticate(this.form.value);
        }
    }

    private _authenticate(credentials) {
        this.submitting = true;
        this.authService.authenticate(credentials).subscribe(
            data => this._onLoginSuccess(),
            error => this._onLoginError(error)
        );
    }

    private _onLoginSuccess() {
        const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/posts';
        this.loginError = false;
        this.router.navigate([returnUrl]);
    }

    private _onLoginError(error) {
        this.submitting = false;
        this.loginError = true;
        this.loginErrorMessage = error;
    }

    private _resetValidators() {
        this.loginError = false;
    }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { THEME } from 'src/app/material/button/button.component';

@Component({
    selector: 'app-login-screen',
    templateUrl: './login-screen.component.html',
    styleUrls: ['./login-screen.component.scss']
})
export class LoginViewComponent {
    public form: FormGroup;

    public loginError = false;

    public buttonTheme = THEME;

    public submitted = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.form = this.fb.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    public get usernameControl(): FormControl {
        return this.form.get('username') as FormControl;
    }

    public get passwordControl(): FormControl {
        return this.form.get('password') as FormControl;
    }

    public onSubmit() {
        this.submitted = true;

        if (this.form.valid) {
            this._authenticate(this.form.value);
        }
    }

    private _authenticate(credentials) {
        this.authService.authenticate(credentials).subscribe(
            data => this._onLoginSuccess(data),
            error => this._onLoginError(error)
        );
    }

    private _onLoginSuccess(data: any) {
        const returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.loginError = false;
        this.router.navigate([returnUrl]);
    }

    private _onLoginError(error: any) {
        this.loginError = true;
    }
}

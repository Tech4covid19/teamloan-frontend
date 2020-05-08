import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { MatchValidator } from 'src/app/form-tools/validators/match.validator';
import { PasswordFormatValidator } from 'src/app/form-tools/validators/password-format.validator';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';

@Component({
    selector: 'app-reset-password-screen',
    templateUrl: './reset-password-screen.component.html',
    styleUrls: ['./reset-password-screen.component.scss']
})
export class ResetPasswordViewComponent implements OnInit, OnDestroy {
    public form: FormGroup;

    public submitted = false;
    public submitting = false;

    public requestSucceeded: boolean = false;
    public requestErrorMessage: string;

    public buttonTheme = THEME;
    public buttonStatus: string = ICON_STATUS.LOADING;

    private _subscriptions = new Subject();
    private _token: string;

    public successFeedback: FeedbackInterface = {
        status: FEEDBACK_STATUS.SUCCESS,
        title: 'Nova password atualizada',
        subTitle: undefined,
        text: undefined,
        actionLabel: 'Iniciar sessão',
        url: '/login'
    };

    constructor(
        private fb: FormBuilder,
        private authUserService: AuthUserService,
        private activatedRoute: ActivatedRoute
    ) {
        this.form = this.fb.group(
            {
                password: [
                    null,
                    Validators.compose([Validators.required, PasswordFormatValidator])
                ],
                confirmPassword: [null, Validators.required]
            },
            { validator: MatchValidator('password', 'confirmPassword') }
        );
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((params: any) => {
            this._token = params.params.token;
        });
    }

    ngOnDestroy(): void {
        this._subscriptions.next();
        this._subscriptions.complete();
    }

    public get passwordControl(): FormControl {
        return this.form.get('password') as FormControl;
    }

    public get confirmPasswordControl(): FormControl {
        return this.form.get('confirmPassword') as FormControl;
    }

    public onSubmit() {
        this.submitted = true;

        if (!this.submitting && this.form.valid) {
            this.submitting = true;

            const password = this.form.value.password;

            this.authUserService.resetPassword(password, this._token).subscribe(
                resp => this._onPasswordResetSuccess(),
                err => this._onPasswordResetError(err)
            );
        }
    }

    private _onPasswordResetSuccess() {
        this.submitting = false;
        this.requestSucceeded = true;
    }

    private _onPasswordResetError(err) {
        this.submitting = false;
        this.requestSucceeded = false;
        this.requestErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
    }
}

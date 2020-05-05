import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { PasswordFormatValidator } from 'src/app/form-tools/validators/password-format.validator';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { CompanyService } from 'src/app/services/company/company.service';

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
        title: undefined,
        subTitle: 'Nova password atualizada',
        text: undefined,
        actionLabel: 'Ir para Login',
        url: ''
    };

    constructor(
        private fb: FormBuilder,
        private companiesService: CompanyService,
        private activatedRoute: ActivatedRoute
    ) {
        this.form = this.fb.group({
            password: [null, Validators.compose([Validators.required, PasswordFormatValidator])],
            confirmPassword: [null, Validators.compose([Validators.required])]
        });

        this.successFeedback.url = this.activatedRoute.snapshot.queryParams.returnUrl || '/login';
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((params: any) => {
            this._token = params.params.token;
        });

        this.form.valueChanges.pipe(takeUntil(this._subscriptions)).subscribe(() => {
            if (this.confirmPasswordControl.value != this.passwordControl.value) {
                this.confirmPasswordControl.setErrors({ different: true });
            } else {
                this.confirmPasswordControl.setErrors(null);
            }
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

            this.companiesService.resetPassword(password, this._token).subscribe(
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

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
    // TODO: este email virá como param?
    public email: string = 'email@teste.com';

    public form: FormGroup;

    public submitted = false;
    public submitting = false;

    public requestSucceeded: boolean = false;
    public requestErrorMessage: string;

    public buttonTheme = THEME;
    public buttonStatus: string = ICON_STATUS.LOADING;

    private _subscriptions = new Subject();

    public successFeedback: FeedbackInterface = {
        status: FEEDBACK_STATUS.SUCCESS,
        title: undefined,
        subTitle: 'Nova password ataualizada para:',
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

        this.successFeedback.text = this.email;
        this.successFeedback.url = this.activatedRoute.snapshot.queryParams.returnUrl || '/login';
    }

    ngOnInit(): void {
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
        console.log(this.passwordControl.errors);
        if (!this.submitting && this.form.valid) {
            this.submitting = true;

            const password = this.form.value.password;

            // TODO: token here
            this.companiesService.resetPassword(this.email, password, 'token').subscribe(
                resp => this._onPasswordResetSuccess(this.email),
                err => this._onPasswordResetError(err)
            );
        }
    }

    // TODO: remove console.logs
    private _onPasswordResetSuccess(email: string) {
        console.log('SUCCESS');
        console.log(email);

        this.successFeedback.text = email;

        this.submitting = false;
        this.requestSucceeded = true;
    }

    private _onPasswordResetError(err) {
        console.log('ERROR!');
        console.log(err);

        this.submitting = false;
        this.requestSucceeded = false;
        // TODO: use err object to write the matching error message (or just write an incoming error message?)
        this.requestErrorMessage = 'Email NÃO ENCONTRADO!!!!!!';
    }
}

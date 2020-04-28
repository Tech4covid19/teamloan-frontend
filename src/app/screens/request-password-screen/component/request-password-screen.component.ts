import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { EmailValidator } from 'src/app/form-tools/validators/email.validator';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { CompanyService } from 'src/app/services/company/company.service';
import { OnSubmitEvent } from '../../register/components/register-form/register-form.component';

// TODO: companyService response using this interface?
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

    public submitted = false;
    public submitting = false;

    public requestSucceeded: boolean = false;
    public requestErrorMessage: string;

    public buttonTheme = THEME;
    public buttonStatus: string = ICON_STATUS.LOADING;

    public successFeedback: FeedbackInterface = {
        status: FEEDBACK_STATUS.SUCCESS,
        title: undefined,
        subTitle: 'Email de recuperação de password enviado para:',
        text: undefined,
        actionLabel: 'Voltar',
        url: ''
    };

    constructor(
        private fb: FormBuilder,
        private companiesService: CompanyService,
        private activatedRoute: ActivatedRoute
    ) {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, EmailValidator])]
        });

        this.successFeedback.url = this.activatedRoute.snapshot.queryParams.returnUrl || '/login';
    }

    public get emailControl(): FormControl {
        return this.form.get('email') as FormControl;
    }

    public onSubmit(submitEvent: OnSubmitEvent) {
        this.submitted = true;
        console.log(this.emailControl.errors);
        if (!this.submitting && this.form.valid) {
            this.submitting = true;

            const email = this.form.value.email;

            this.companiesService.requestPassword(email).subscribe(
                resp => this._onPasswordRequestSuccess(email),
                err => this._onPasswordRequestError(err)
            );
        }
    }

    private _onPasswordRequestSuccess(email: string) {
        console.log('SUCCESS');
        console.log(email);

        this.successFeedback.text = email;

        this.submitting = false;
        this.requestSucceeded = true;
    }

    private _onPasswordRequestError(err) {
        console.log('ERROR!');
        console.log(err);

        this.submitting = false;
        this.requestSucceeded = false;
        // TODO: use err object to write the matching error message (or just write an incoming error message?)
        this.requestErrorMessage = 'Email NÃO ENCONTRADO!!!!!!';
    }
}

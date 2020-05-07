import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { EmailValidator } from 'src/app/form-tools/validators/email.validator';
import { ICON_STATUS, THEME } from 'src/app/material/button/button.component';
import { CompanyService } from 'src/app/services/company/company.service';

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
        title: 'Pedido processado',
        subTitle:
            'Se estiver registado, irá receber em breve momentos um email de recuperação de password enviado para',
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

    public onSubmit() {
        this.submitted = true;

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
        this.successFeedback.text = email;
        this.submitting = false;
        this.requestSucceeded = true;
    }

    private _onPasswordRequestError(err) {
        this.submitting = false;
        this.requestSucceeded = false;
        this.requestErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.';
    }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProspectService } from 'src/app/services/prospect/prospect-service';

enum STATUS {
    DEFAULT = 'default',
    SUCCESS = 'success',
    REPEATED = 'repeated',
    ERROR = 'error',
}

const SUBMISSION_STATUS = {
    [STATUS.DEFAULT]: {
        label: 'Deixe o email para receber mais informações.',
        button: 'Quero saber mais',
        icon: undefined,
    },
    [STATUS.SUCCESS]: {
        label: 'O seu email foi adicionado com sucesso',
        button: 'Subscrito',
        icon: 'check',
    },
    [STATUS.REPEATED]: {
        label: 'O email já foi subscrito',
        button: 'Erro na subscrição',
        icon: 'error',
    },
    [STATUS.ERROR]: {
        label: 'Por favor confirme o seu endereço de email',
        button: 'Erro na subscrição',
        icon: 'error',
    },
};

@Component({
    selector: 'app-section-intro',
    templateUrl: './section-intro.component.html',
    styleUrls: ['./section-intro.component.scss'],
})
export class SectionIntroComponent {
    public form: FormGroup;

    public submitted = false;

    public submissionStatus = SUBMISSION_STATUS.default;

    private _requesting = false;

    constructor(private fb: FormBuilder, private prospectService: ProspectService) {
        this.form = fb.group({
            email: [null, Validators.required],
        });
    }

    public get email(): FormControl {
        return this.form.get('email') as FormControl;
    }

    public onFormSubmit() {
        this.submitted = true;
        if (this.form.valid && !this._requesting) {
            this._submitProspect(this.form.value);
        }
    }

    private _submitProspect(data: any) {
        this.prospectService.createProspect(data).subscribe(
            () => this._onSuccess(),
            error => this._onError(error),
        );
    }

    private _onSuccess() {
        this._updateSubmissionStatus(STATUS.SUCCESS);
    }

    private _onError(error: any) {
        if (error && error.status === 409) {
            this._updateSubmissionStatus(STATUS.REPEATED);
        } else {
            this._updateSubmissionStatus(STATUS.ERROR);
        }
    }

    private _updateSubmissionStatus(status: string) {
        this.submissionStatus = SUBMISSION_STATUS[status];
    }
}

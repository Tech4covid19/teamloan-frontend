import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProspectService } from 'src/app/services/prospect/prospect-service';
import { ICON_STATUS } from 'src/app/material/button/button.component';

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
        status: undefined,
    },
    [STATUS.SUCCESS]: {
        label: 'O seu email foi adicionado com sucesso',
        button: 'Subscrito',
        status: ICON_STATUS.CHECK,
    },
    [STATUS.REPEATED]: {
        label: 'O email já foi subscrito',
        button: 'Erro na subscrição',
        status: ICON_STATUS.ERROR,
    },
    [STATUS.ERROR]: {
        label: 'Por favor confirme o seu endereço de email',
        button: 'Erro na subscrição',
        status: ICON_STATUS.ERROR,
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

    public submissionStatus = SUBMISSION_STATUS[STATUS.DEFAULT];

    public requesting = false;

    public buttonStatus = ICON_STATUS;

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
        if (this.form.valid && !this.requesting) {
            this._submitProspect(this.form.value);
        }
    }

    private _submitProspect(data: any) {
        this.requesting = true;
        this.prospectService.createProspect(data).subscribe(
            () => this._onSuccess(),
            error => this._onError(error),
        );
    }

    private _onSuccess() {
        this.requesting = false;
        this._updateSubmissionStatus(STATUS.SUCCESS);
    }

    private _onError(error: any) {
        this.requesting = false;
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

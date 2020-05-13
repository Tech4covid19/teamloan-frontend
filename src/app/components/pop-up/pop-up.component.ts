import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ICON_STATUS } from 'src/app/material/button/button.component';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnDestroy {
    @Input()
    public title: string;

    @Input()
    public infoText: string;

    @Input()
    public confirmButtonLabel: string = 'Ok';

    @Input()
    public abortButtonLabel: string = 'Voltar';

    @Input()
    public form: FormGroup;

    @Output()
    public onClosePopUp = new EventEmitter();

    public buttonStatus = ICON_STATUS;

    public submitting = false;
    public reponseError = false;

    private _subscriptions$ = new Subject();

    ngOnDestroy(): void {
        this._subscriptions$.next();
        this._subscriptions$.complete();
    }

    public onSubmit(): void {
        console.log('FORM VALUE:');
        console.log(this.form.value);

        if (!this.submitting && this.form.valid) {
            this.submitting = true;

            // TODO: emit event "confirm"
            this._onSuccess();
        }
    }

    public onAbort() {
        this.onClosePopUp.emit();
    }

    private _onSuccess() {
        this.submitting = false;
        this.reponseError = false;
    }

    private _onError() {
        this.submitting = false;
        this.reponseError = true;
    }
}

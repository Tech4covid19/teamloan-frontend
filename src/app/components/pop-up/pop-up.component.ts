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
    public onAbort = new EventEmitter();

    @Output()
    public onConfirm = new EventEmitter();

    public buttonStatus = ICON_STATUS;

    public submitting = false;
    public reponseError = false;

    constructor() {
        console.log('FORM');
        console.log(this.form);
    }

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

            this.onConfirm.emit(this.form.value);
            this._onSuccess();
        }
    }

    public onAbortPopUp() {
        this.onAbort.emit();
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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICON_STATUS } from 'src/app/material/button/button.component';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
    public buttonStatus = ICON_STATUS;

    @Input()
    public title: string;

    @Input()
    public infoText: string;

    @Input()
    public confirmButtonLabel: string = 'Ok';

    @Input()
    public abortButtonLabel: string = 'Voltar';

    @Input()
    public submitting = false;

    @Input()
    public responseError = false;

    @Output()
    public onAbort = new EventEmitter();

    @Output()
    public onConfirm = new EventEmitter();

    public onAbortPopUp() {
        this.onAbort.emit();
    }

    public onConfirmPopUp() {
        this.onConfirm.emit();
    }
}

import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormNotifier, FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { TermsValidator } from 'src/app/form-tools/validators/terms-checkbox.validator';
import { ICON_STATUS } from 'src/app/material/button/button.component';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { RegisterViewModel } from '../../register-user.viewmodel';
import { Subscription } from 'rxjs';

export interface OnSubmitEvent {
    data: RegisterViewModel;
    callback: (error?: any) => void;
}

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnDestroy {

    public form: FormGroup;

    public buttonStatus = ICON_STATUS;

    public requesting = false;

    // to notify child forms so they can be validated
    public notifier: FormNotifier;

    public hasTermsError = false;

    public isSubmitted = false;

    public serverError = false;

    private subscriptions: Subscription[] = [];

    @Input()
    public businessAreas: InputSelectOption[];

    @Output()
    public submitEvent: EventEmitter<OnSubmitEvent> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private notifierFactory: FormNotifierFactory
    ) {
        this.notifier = this.notifierFactory.create();
        this.form = this.formBuilder.group({
            company: [],
            user: [],
            checkbox: [false]
        }, { validator: TermsValidator('checkbox') });

        this.trackCheckboxChanges();
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    public submit() {
        this.serverError = false;
        this.isSubmitted = true;
        this.hasTermsError = this.form.hasError('terms');
        this.notifier.triggerValidation();
        if ( this.form.valid ) {
            this.setIsRequesting();
            this.submitEvent.emit({
                data: this.form.value,
                callback: (err) => {
                    if (err) {
                        this.serverError = true;
                    }
                    this.setRequestFinished();
                }
            });
        }
    }

    private setIsRequesting() {
        this.requesting = true;
    }

    private setRequestFinished() {
        this.requesting = false;
    }

    private trackCheckboxChanges() {
        const sub = this.form.valueChanges.subscribe(() => {
            this.hasTermsError = this.form.hasError('terms') && this.isSubmitted;
        });
        this.subscriptions.push(sub);
    }
}

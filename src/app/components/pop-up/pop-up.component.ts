import { Location } from '@angular/common';
import { Component, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ICON_STATUS } from 'src/app/material/button/button.component';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { Posting } from 'src/app/models/posting/posting';

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

    public form: FormGroup;

    public buttonStatus = ICON_STATUS;

    public submitting = false;
    public reponseError = false;

    public currentPosting: Posting;
    public reasonOptions$: Observable<InputSelectOption[]> = new Observable();

    private _subscriptions$ = new Subject();

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {
        this.currentPosting = this.activatedRoute.snapshot.data.posting;

        this.form = this.formBuilder.group({
            reason: [],
            details: [null, Validators.required]
        });
    }

    ngOnDestroy(): void {
        this._subscriptions$.next();
        this._subscriptions$.complete();
    }

    public get reasonControl(): FormControl {
        return this.form.get('reason') as FormControl;
    }

    public onSubmit(): void {
        if (!this.submitting && this.form.valid) {
            this.submitting = true;

            // TODO: emit event "confirm"
            this._onSuccess();
        }
    }

    public navigateBack() {
        // TODO: replace this to emi event  "abort"
        this.location.back();
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

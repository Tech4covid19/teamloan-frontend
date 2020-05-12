import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ICON_STATUS } from 'src/app/material/button/button.component';
import { Posting } from 'src/app/models/posting/posting';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';

@Component({
    selector: 'app-close-post-view',
    templateUrl: './close-post-view.component.html',
    styleUrls: ['./close-post-view.component.scss']
})
export class ClosePostViewComponent implements OnDestroy {
    public form: FormGroup;

    public buttonStatus = ICON_STATUS;

    public submitting = false;
    public reponseError = false;

    public currentPosting: Posting;
    public reasonOptions$: Observable<InputSelectOption[]> = new Observable();

    private _subscriptions$ = new Subject();

    constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
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

            // TODO: call service here
            this._onSuccess();
        }
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

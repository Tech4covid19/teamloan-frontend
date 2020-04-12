import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { THEME } from 'src/app/material/button/button.component';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface FilterChangeEvent {
    intent: INTENT;
    sector: string;
    location: string;
    function: string;
}

export enum INTENT {
    SEEKER = 'seeker',
    LENDER = 'lender'
}

@Component({
    selector: 'app-filter-toolbar',
    templateUrl: './filter-toolbar.component.html',
    styleUrls: ['./filter-toolbar.component.scss']
})
export class FilterToolbarComponent implements OnInit, OnDestroy {
    @Input()
    sectorOptions: InputSelectOption[] = [];
    @Input()
    locationOptions: InputSelectOption[] = [];
    @Input()
    functionOptions: InputSelectOption[] = [];

    @Output() filterChange = new EventEmitter<FilterChangeEvent>();

    private _subscriptions = new Subject();

    form: FormGroup;
    onChangesSubscription: Subscription;

    intent = INTENT;
    currentIntent = INTENT.SEEKER;
    seekerTheme = THEME.MAIN;
    lenderTheme = THEME.SECUNDARY;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            sector: null,
            location: null,
            function: null
        });

        this.onChanges();
    }

    ngOnDestroy(): void {
        this._subscriptions.next();
        this._subscriptions.complete();
    }

    onChanges(): void {
        this.form.valueChanges.pipe(takeUntil(this._subscriptions)).subscribe(() => {
            this.emitFilterChangeEvent();
        });
    }

    onIntentChange(newIntent: INTENT) {
        this.currentIntent = newIntent;
        this.changeIntentTheme(newIntent);
        this.emitFilterChangeEvent();
    }

    public emitFilterChangeEvent() {
        const formValue = this.form.value;
        formValue.intent = this.currentIntent;

        this.filterChange.emit(formValue);
    }

    private changeIntentTheme(newIntent: INTENT) {
        switch (newIntent) {
            case INTENT.SEEKER:
                this.seekerTheme = THEME.MAIN;
                this.lenderTheme = THEME.SECUNDARY;
                break;
            case INTENT.LENDER:
                this.seekerTheme = THEME.SECUNDARY;
                this.lenderTheme = THEME.MAIN;
                break;
        }
    }
}

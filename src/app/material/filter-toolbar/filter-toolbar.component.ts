import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { THEME } from 'src/app/material/button/button.component';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface FilterChangeEvent {
    intent: INTENT;
    district: string;
    municipality: string;
    sector: string;
    function: string;
}

export enum INTENT {
    SEEK = 'seek',
    LEND = 'lend'
}

@Component({
    selector: 'app-filter-toolbar',
    templateUrl: './filter-toolbar.component.html',
    styleUrls: ['./filter-toolbar.component.scss']
})
export class FilterToolbarComponent implements OnInit, OnDestroy {
    @Input()
    intentToggle: boolean;
    @Input()
    sectorOptions: InputSelectOption[] = [];
    @Input()
    districtOptions: InputSelectOption[] = [];
    @Input()
    municipalityOptions: InputSelectOption[] = [];
    @Input()
    functionOptions: InputSelectOption[] = [];

    @Output() filterChange = new EventEmitter<FilterChangeEvent>();

    private _subscriptions = new Subject();

    form: FormGroup;
    onChangesSubscription: Subscription;

    postsIntent = INTENT;
    currentPostsIntent = INTENT.LEND;
    lendTheme = THEME.MAIN;
    seekTheme = THEME.SECUNDARY;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            district: null,
            municipality: null,
            sector: null,
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
        this.currentPostsIntent = newIntent;
        this.changeIntentTheme(newIntent);
        this.emitFilterChangeEvent();
    }

    public emitFilterChangeEvent() {
        const formValue = this.form.value;
        formValue.intent = this.currentPostsIntent;

        this.filterChange.emit(formValue);
    }

    private changeIntentTheme(newIntent: INTENT) {
        switch (newIntent) {
            case INTENT.SEEK:
                this.seekTheme = THEME.MAIN;
                this.lendTheme = THEME.SECUNDARY;
                break;
            case INTENT.LEND:
                this.seekTheme = THEME.SECUNDARY;
                this.lendTheme = THEME.MAIN;
                break;
        }
    }
}

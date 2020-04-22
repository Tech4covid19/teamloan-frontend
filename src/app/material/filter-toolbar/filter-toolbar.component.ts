import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { THEME } from 'src/app/material/button/button.component';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { INTENT } from 'src/app/models/intent.enum';

import {
    QueryFilterInterface,
    QUERY_FILTER_PARAMETERS
} from 'src/app/services/posting/query-filter';

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

    @Output() filterChange = new EventEmitter<QueryFilterInterface>();

    public queryFilterParameters = QUERY_FILTER_PARAMETERS;

    private _subscriptions = new Subject();

    form: FormGroup;
    onChangesSubscription: Subscription;

    postsIntent = INTENT;
    currentPostsIntent = this.postsIntent.LEND;
    lendTheme = THEME.MAIN;
    seekTheme = THEME.SECUNDARY;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        const filterForm: QueryFilterInterface = {
            [QUERY_FILTER_PARAMETERS.INTENT]: INTENT.LEND,
            [QUERY_FILTER_PARAMETERS.DISTRICT]: '',
            [QUERY_FILTER_PARAMETERS.BUSINESS_AREA]: '',
            [QUERY_FILTER_PARAMETERS.JOB]: '',
            [QUERY_FILTER_PARAMETERS.MUNICIPALITY]: ''
        };
        this.form = this.fb.group(filterForm);

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
        this.form
            .get(QUERY_FILTER_PARAMETERS.DISTRICT)
            .valueChanges.pipe(takeUntil(this._subscriptions))
            .subscribe(x => {
                this.form.get(QUERY_FILTER_PARAMETERS.MUNICIPALITY).setValue('');
                this.municipalityOptions = [];
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
        this.form.get(QUERY_FILTER_PARAMETERS.INTENT).setValue(newIntent);
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

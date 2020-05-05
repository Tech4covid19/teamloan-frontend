import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { pairwise, startWith, takeUntil } from 'rxjs/operators';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { THEME } from 'src/app/material/button/button.component';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { INTENT } from 'src/app/models/intent.enum';
import {
    QueryFilterInterface,
    QUERY_FILTER_PARAMETERS
} from 'src/app/services/posting/query-filter';

const DEFAULT_FILTERS: any = {
    [QUERY_FILTER_PARAMETERS.INTENT]: INTENT.LEND,
    [QUERY_FILTER_PARAMETERS.DISTRICT]: '',
    [QUERY_FILTER_PARAMETERS.BUSINESS_AREA]: '',
    [QUERY_FILTER_PARAMETERS.JOB]: '',
    [QUERY_FILTER_PARAMETERS.MUNICIPALITY]: ''
};

@Component({
    selector: 'app-filter-toolbar',
    templateUrl: './filter-toolbar.component.html',
    styleUrls: ['./filter-toolbar.component.scss']
})
export class FilterToolbarComponent implements OnInit, OnDestroy {
    @Input()
    intentToggle = true;

    @Input()
    sectorOptions: InputSelectOption[] = [];

    @Input()
    districtOptions: InputSelectOption[] = [];

    @Input()
    municipalityOptions: InputSelectOption[] = [];

    @Input()
    functionOptions: InputSelectOption[] = [];

    form: FormGroup;
    onChangesSubscription: Subscription;
    postsIntent = INTENT;
    currentPostsIntent = this.postsIntent.LEND;
    lendTheme = THEME.MAIN;
    seekTheme = THEME.SECUNDARY;

    public queryFilterParameters = QUERY_FILTER_PARAMETERS;

    private _subscriptions$ = new Subject();

    constructor(private fb: FormBuilder, private postsListFilterService: PostsListFilterService) {}

    ngOnInit(): void {
        const initialValue = this.postsListFilterService.getFilter()
            ? this.postsListFilterService.getFilter()
            : DEFAULT_FILTERS;
        this.form = this.fb.group(initialValue);
        this.onChanges();
    }

    ngOnDestroy(): void {
        this._subscriptions$.next();
        this._subscriptions$.complete();
    }

    onChanges(): void {
        this.form.valueChanges
            .pipe(takeUntil(this._subscriptions$), startWith({}), pairwise())
            .subscribe(([prevFilter, newFilter]: [QueryFilterInterface, QueryFilterInterface]) => {
                if (prevFilter.district !== newFilter.district) {
                    this.form
                        .get(QUERY_FILTER_PARAMETERS.MUNICIPALITY)
                        .setValue('', { emitEvent: false });
                    this.municipalityOptions = [];
                }
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
        this.postsListFilterService.setFilter(formValue);
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

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { INTENT } from 'src/app/models/intent.enum';
import {
    QueryFilterInterface,
    QUERY_FILTER_PARAMETERS
} from 'src/app/services/posting/query-filter';
import { UrlQueryParamsService } from 'src/app/services/url-query-params.service';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_FILTERS: any = {
    [QUERY_FILTER_PARAMETERS.INTENT]: INTENT.LEND,
    [QUERY_FILTER_PARAMETERS.DISTRICT]: '',
    [QUERY_FILTER_PARAMETERS.BUSINESS_AREA]: '',
    [QUERY_FILTER_PARAMETERS.JOB]: '',
    [QUERY_FILTER_PARAMETERS.MUNICIPALITY]: ''
};

@Injectable()
export class PostsListFilterService implements OnDestroy {
    private _onFilter$: BehaviorSubject<any> = new BehaviorSubject(DEFAULT_FILTERS);

    private _subscriptions$ = new Subject();

    constructor(private urlQueryParamsService: UrlQueryParamsService) {
        this.urlQueryParamsService
            .getQueryParams()
            .pipe(takeUntil(this._subscriptions$))
            .subscribe(params => {
                const values: QueryFilterInterface = {
                    ...DEFAULT_FILTERS,
                    ...params
                };
                this.setFilter(values, false);
            });
    }

    ngOnDestroy() {
        this._subscriptions$.next();
        this._subscriptions$.complete();
    }

    public setFilter(filter: QueryFilterInterface, updateUrlQuery = true) {
        const filtersChanged = this._filtersChanged(this._onFilter$.value, filter);
        if (filtersChanged) {
            if (updateUrlQuery) {
                this.urlQueryParamsService.setQueryParams(filter);
            }
            this._onFilter$.next(filter);
        }
    }

    public onFilter(): Observable<any> {
        return this._onFilter$.asObservable();
    }

    public getFilter(): QueryFilterInterface {
        return this._onFilter$.value;
    }

    private _filtersChanged(
        prevFilter: QueryFilterInterface,
        newFilter: QueryFilterInterface
    ): boolean {
        return !Object.keys(QUERY_FILTER_PARAMETERS).reduce((status, currentValue) => {
            const filterKey = QUERY_FILTER_PARAMETERS[currentValue];
            return status && prevFilter[filterKey] === newFilter[filterKey];
        }, true);
    }
}

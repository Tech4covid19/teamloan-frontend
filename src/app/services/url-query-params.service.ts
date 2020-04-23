import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Injectable({
    providedIn: 'root'
})
export class UrlQueryParamsService implements OnDestroy {
    private _subscriptions$: Subscription;

    private _queryParams$: BehaviorSubject<Params> = new BehaviorSubject(null);

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this._subscriptions$ = this.activatedRoute.queryParams.subscribe(params =>
            this._queryParams$.next(params)
        );
    }

    ngOnDestroy() {
        this._subscriptions$.unsubscribe();
    }

    public getQueryParams(): Observable<Params> {
        return this._queryParams$.asObservable();
    }

    public setQueryParams(filters: QueryFilterInterface) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: filters,
            queryParamsHandling: 'merge'
        });
    }
}

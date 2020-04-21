import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Injectable()
export class PostsListFilterService {
    private _onFilter$: Subject<any> = new Subject();

    public filter(filter: QueryFilterInterface) {
        this._onFilter$.next(filter);
    }

    public onFilter(): Observable<any> {
        return this._onFilter$.asObservable();
    }
}

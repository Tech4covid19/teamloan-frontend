import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posting } from 'src/app/models/posting/posting';
import { QueryFilterInterface } from 'src/app/services/posting/query-filter';

@Injectable()
export abstract class AbsctractPostsListService {
    public abstract getPosting(filters: QueryFilterInterface): Observable<Posting[]>;
}

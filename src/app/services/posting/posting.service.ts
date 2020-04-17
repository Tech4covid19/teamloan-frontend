import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company } from 'src/app/models/company/company';
import { Posting } from 'src/app/models/posting/posting';
import { BaseService } from 'src/app/services/base-service/base.service';
import { QueryFilter, QueryFilterInterface } from 'src/app/services/posting/query-filter';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PostingService extends BaseService {
    public getPosting(filters: QueryFilterInterface, userId?: string): Observable<Posting[]> {
        const url = userId
            ? `${environment.backend.url}${Company.URL}/${userId}/${Posting.URL}`
            : `${environment.backend.url}${Posting.URL}`;
        const httpOptions = {
            headers: this.headers,
            params: QueryFilter.getHttParams(filters)
        };

        return this.httpClient.get<Posting>(url, httpOptions).pipe(
            map(data => {
                let postings = [];
                if (Array.isArray(data)) {
                    postings = data.map(post => new Posting(post));
                }
                return postings;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }
}

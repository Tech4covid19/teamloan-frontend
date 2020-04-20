import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company } from 'src/app/models/company/company';
import { Posting } from 'src/app/models/posting/posting';
import { BaseService, METHOD } from 'src/app/services/base-service/base.service';
import { QueryFilter, QueryFilterInterface } from 'src/app/services/posting/query-filter';
import { environment } from 'src/environments/environment';
import { UUID } from 'src/app/models/uuid-object';

@Injectable({
    providedIn: 'root'
})
export class PostingService extends BaseService {

    public save(userId: string, posting: Posting): Observable<UUID> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.URL}/${userId}/${Posting.URL}`;
        return this.httpClient.post(url, posting, httpOptions).pipe(
            map((resp: any) => ({
                uuid: resp.uuid
            }))
        );
    }

    public getPosting(filters: QueryFilterInterface, userId?: string): Observable<Posting[]> {
        const httpOptions = {
            headers: this.headers,
            params: QueryFilter.getHttParams(filters)
        };
        const url = userId
            ? `${environment.backend.url}${Company.URL}/${userId}/${Posting.URL}`
            : `${environment.backend.url}${Posting.URL}`;

        return this.request<Posting[]>(METHOD.GET, url, httpOptions).pipe(
            map(data => {
                let postings = [];
                if (Array.isArray(data)) {
                    postings = data.map(post => new Posting(post));
                }
                return postings;
            })
        );
    }

    public getById(postingUUID: string): Observable<Posting> {
        const httpOptions = {
            headers: this.headers
        };
        const url = `${environment.backend.url}${Posting.URL}/${postingUUID}`;
        return this.request<Posting>(METHOD.GET, url, httpOptions)
        .pipe(map((res) => new Posting(res)));
    }
}

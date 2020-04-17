import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { District } from 'src/app/models/district/district';
import { BaseService } from 'src/app/services/base-service/base.service';
import { DistrictStore } from 'src/app/services/district/district.store';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DistrictService extends BaseService {
    constructor(
        public httpClient: HttpClient,
        public googleAnalytics: GoogleAnalyticsService,
        private districtStore: DistrictStore
    ) {
        super(httpClient, googleAnalytics);
    }

    public get(): Observable<District[]> {
        if (!this.districtStore.districts.length) {
            this._getRequest();
        }
        return this.districtStore.getDistricts();
    }

    private _getRequest() {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${District.URL}`;
        this.httpClient
            .get<District>(url, httpOptions)
            .pipe(
                map(data => {
                    let items = [];
                    if (Array.isArray(data)) {
                        items = data.map(item => new District(item));
                    }
                    this.districtStore.districts = items;
                }),
                catchError(() => {
                    return of([]);
                })
            )
            .subscribe();
    }
}

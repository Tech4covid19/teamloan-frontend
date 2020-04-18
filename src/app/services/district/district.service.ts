import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { District } from 'src/app/models/district/district';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BaseService, METHOD } from 'src/app/services/base-service/base.service';
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
        public authService: AuthService,
        private districtStore: DistrictStore
    ) {
        super(httpClient, googleAnalytics, authService);
    }

    public get(): Observable<District[]> {
        if (!this.districtStore.districts.length) {
            this._getRequest().subscribe();
        }
        return this.districtStore.getDistricts();
    }

    private _getRequest(): Observable<void> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${District.URL}`;

        return this.request<District[]>(METHOD.GET, url, httpOptions).pipe(
            map(data => {
                let items = [];
                if (Array.isArray(data)) {
                    items = data.map(item => new District(item));
                }
                this.districtStore.districts = items;
            })
        );
    }
}

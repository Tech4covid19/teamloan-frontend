import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Jobs } from 'src/app/models/jobs/jobs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BaseService, METHOD } from 'src/app/services/base-service/base.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { JobsStore } from 'src/app/services/jobs/jobs.store';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class JobsService extends BaseService {
    constructor(
        public httpClient: HttpClient,
        public googleAnalytics: GoogleAnalyticsService,
        public authService: AuthService,
        private districtStore: JobsStore
    ) {
        super(httpClient, googleAnalytics, authService);
    }

    public get(): Observable<Jobs[]> {
        if (!this.districtStore.jobs.length) {
            this._getRequest().subscribe();
        }
        return this.districtStore.getJobss();
    }

    private _getRequest(): Observable<void> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Jobs.URL}`;

        return this.request<Jobs[]>(METHOD.GET, url, httpOptions).pipe(
            map(data => {
                let items = [];
                if (Array.isArray(data)) {
                    items = data.map(item => new Jobs(item));
                }
                this.districtStore.jobs = items;
            })
        );
    }
}

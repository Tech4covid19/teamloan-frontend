import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
    GoogleAnalyticsService,
    GAErrorReport
} from 'src/app/services/google-analytics/google-analytics.service';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(public httpClient: HttpClient, public googleAnalytics: GoogleAnalyticsService) {}

    protected reportError(errorReport: GAErrorReport) {
        this.googleAnalytics.eventEmitter(errorReport);
    }
}

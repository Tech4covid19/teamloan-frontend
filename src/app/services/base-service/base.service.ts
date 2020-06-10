import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
    GAErrorReport,
    GoogleAnalyticsService
} from 'src/app/services/google-analytics/google-analytics.service';

export enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(
        public httpClient: HttpClient,
        public googleAnalytics: GoogleAnalyticsService,
        public authService: AuthService
    ) {}

    public request<T>(method: string, url: string, httpOptions: any): Observable<T> {
        return this.httpClient.request<T>(method, url, httpOptions).pipe(
            catchError(error => {
                if (error.status === 401) {
                    return this.authService.unauthenticate();
                }
                return throwError(error);
            })
        );
    }

    protected reportError(errorReport: GAErrorReport) {
        this.googleAnalytics.eventEmitter(errorReport);
    }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics/google-analytics.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProspectService {
    private _type = 'prospect';

    constructor(private httpClient: HttpClient, private googleAnalytics: GoogleAnalyticsService) {}

    public createProspect(data: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                'Content-Type': 'application/json'
            })
        };

        return this.httpClient
            .post(`${environment.backend.url}${this._type}`, data, httpOptions)
            .pipe(
                catchError(error => {
                    this._reportError(error.status);
                    return throwError(error);
                })
            );
    }

    private _reportError(value: any) {
        this.googleAnalytics.eventEmitter({
            eventName: 'create_prospect_error',
            eventCategory: 'prospect',
            eventAction: 'create_error',
            eventLabel: value
        });
    }
}

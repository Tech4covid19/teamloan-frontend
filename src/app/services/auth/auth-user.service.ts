import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/internal/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthStore } from 'src/app/services/auth/auth.store';
import { CompanyService } from 'src/app/services/company/company.service';
import { BaseService, METHOD } from '../base-service/base.service';
import { GoogleAnalyticsService } from '../google-analytics/google-analytics.service';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company/company';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthUserService extends BaseService {
    constructor(
        public httpClient: HttpClient,
        public googleAnalytics: GoogleAnalyticsService,
        public authService: AuthService,
        private authStore: AuthStore,
        private companyService: CompanyService
    ) {
        super(httpClient, googleAnalytics, authService);
    }

    public getAuthUser(): Observable<AuthUser> {
        if (!this.authStore.authUser) {
            return this._requestAuthUser().pipe(switchMap(() => this.authStore.getAuthUser()));
        }
        return this.authStore.getAuthUser();
    }

    public activate(activationToken: string): Observable<any> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.URL}/activation/${activationToken}`;
        return this.request(METHOD.POST, url, httpOptions);
    }

    public resetPassword(newPassword: string, resetToken: string): Observable<any> {
        const httpOptions = { headers: this.headers, body: { password: newPassword } };
        const url = `${environment.backend.url}${Company.URL}/reset-password/${resetToken}`;
        return this.request(METHOD.POST, url, httpOptions);
    }

    public requestPassword(email: string): Observable<any> {
        const httpOptions = { headers: this.headers, body: { email: email } };
        const url = `${environment.backend.url}${Company.URL}/forgot-password`;
        return this.request(METHOD.POST, url, httpOptions);
    }

    private _requestAuthUser(): Observable<AuthUser> {
        const uuid = this.authService.getDecodedToken().uuid;
        return this.companyService.getCompany(uuid).pipe(
            tap(authUser => (this.authStore.authUser = authUser)),
            catchError(error => {
                return throwError(error);
            })
        );
    }
}

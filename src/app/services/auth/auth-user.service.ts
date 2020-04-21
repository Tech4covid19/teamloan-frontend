import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/internal/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthStore } from 'src/app/services/auth/auth.store';
import { CompanyService } from 'src/app/services/company/company.service';

@Injectable({
    providedIn: 'root'
})
export class AuthUserService {
    constructor(
        private authService: AuthService,
        private authStore: AuthStore,
        private companyService: CompanyService
    ) {}

    public getAuthUser(): Observable<AuthUser> {
        if (!this.authStore.authUser) {
            return this._requestAuthUser().pipe(switchMap(() => this.authStore.getAuthUser()));
        }
        return this.authStore.getAuthUser();
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

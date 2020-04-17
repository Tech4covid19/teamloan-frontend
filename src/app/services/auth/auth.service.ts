import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/internal/operators';
import { Company } from 'src/app/models/company/company';
import { AuthStore } from 'src/app/services/auth/auth.store';
import { AccessTokenInterface } from 'src/app/services/auth/interfaces/access-token.interface';
import { TokenInterface } from 'src/app/services/auth/interfaces/token.interface';
import { CompanyService } from 'src/app/services/company/company.service';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _url = `${environment.keycloak.url}realms/${environment.keycloak.realm}/protocol/openid-connect/`;

    constructor(
        private httpClient: HttpClient,
        private companyService: CompanyService,
        private authStore: AuthStore
    ) {}

    public authenticate(credentials: { username: string; password: string }): Observable<Company> {
        const body = new HttpParams()
            .set('username', credentials.username)
            .set('password', credentials.password)
            .set('client_id', environment.keycloak.clientId)
            .set('grant_type', 'password');

        return this.httpClient.post<TokenInterface>(`${this._url}token`, body).pipe(
            tap(token => this._setToken(token)),
            switchMap(() => this._requestAuthUser())
        );
    }

    public unauthenticate(): Observable<any> {
        localStorage.clear();
        this.authStore.token = null;
        return this.httpClient.get(`${this._url}logout`).pipe(
            catchError(error => {
                this.unauthenticate();
                return throwError(error);
            })
        );
    }

    public isAuthenticated(): boolean {
        if (!this.getToken()) {
            return false;
        }
        return true;
    }

    public getToken(): string {
        return this.authStore.token && this.authStore.token.access_token
            ? this.authStore.token.access_token
            : localStorage.getItem(TOKEN_KEY);
    }

    public getAuthUser(): Observable<Company> {
        if (!this.authStore.authUser) {
            return this._requestAuthUser().pipe(switchMap(() => this.authStore.getAuthUser()));
        }
        return this.authStore.getAuthUser();
    }

    private _setToken(token: TokenInterface) {
        this.authStore.token = token;
        localStorage.setItem(TOKEN_KEY, token.access_token);
    }

    private _requestAuthUser(): Observable<Company> {
        const uuid = this._decodedToken().uuid;
        return this.companyService.getCompany(uuid).pipe(
            tap(authUser => (this.authStore.authUser = authUser)),
            catchError(error => {
                this.unauthenticate();
                return throwError(error);
            })
        );
    }

    private _decodedToken(): AccessTokenInterface {
        return jwt_decode<AccessTokenInterface>(this.getToken());
    }
}

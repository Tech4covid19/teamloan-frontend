import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { AuthStore } from 'src/app/services/auth/auth.store';
import { AccessTokenInterface } from 'src/app/services/auth/interfaces/access-token.interface';
import { TokenInterface } from 'src/app/services/auth/interfaces/token.interface';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _url = `${environment.keycloak.url}realms/${environment.keycloak.realm}/protocol/openid-connect/`;

    constructor(
        private httpClient: HttpClient,
        private authStore: AuthStore,
        private router: Router
    ) {}

    public clear() {
        localStorage.clear();
        this.authStore.clear();
    }

    public authenticate(credentials: {
        username: string;
        password: string;
    }): Observable<TokenInterface> {
        const body = new HttpParams()
            .set('username', credentials.username)
            .set('password', credentials.password)
            .set('client_id', environment.keycloak.clientId)
            .set('grant_type', 'password');

        return this.httpClient.post<TokenInterface>(`${this._url}token`, body).pipe(
            tap(token => this._setToken(token)),
            tap(() => (this.authStore.isAuthenticated = true))
        );
    }

    public unauthenticate(): Observable<any> {
        return this.httpClient.get(`${this._url}logout`).pipe(
            tap(() => {
                this.clear();
                this.router.navigate(['/']);
            }),
            catchError(error => {
                this.clear();
                this.router.navigate(['/']);
                return throwError(error);
            })
        );
    }

    public isAuthenticated(): Observable<boolean> {
        if (this.authStore.isAuthenticated === null) {
            this.authStore.isAuthenticated = !!this.getToken();
        }
        return this.authStore.getIsAuthenticated();
    }

    public getDecodedToken(): AccessTokenInterface {
        return jwt_decode<AccessTokenInterface>(this.getToken());
    }

    public getToken(): string {
        return this.authStore.token && this.authStore.token.access_token
            ? this.authStore.token.access_token
            : localStorage.getItem(TOKEN_KEY);
    }

    private _setToken(token: TokenInterface) {
        this.authStore.token = token;
        localStorage.setItem(TOKEN_KEY, token.access_token);
    }
}

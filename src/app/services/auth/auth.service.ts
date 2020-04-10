import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/internal/operators';
import { Company } from 'src/app/models/company';
import { AccessTokenInterface } from 'src/app/services/auth/interfaces/access-token.interface';
import { TokenInterface } from 'src/app/services/auth/interfaces/token.interface';
import { CompanyService } from 'src/app/services/company/company.service';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _token: TokenInterface;

    private _authUser: Company;

    constructor(private httpClient: HttpClient, private companyService: CompanyService) {}

    public unauthenticate() {
        localStorage.clear();
        this._token = null;
    }

    public authenticate(credentials: { username: string; password: string }): Observable<Company> {
        const url = `${environment.keycloak.url}realms/${environment.keycloak.realm}/protocol/openid-connect/token`;

        const body = new HttpParams()
            .set('username', credentials.username)
            .set('password', credentials.password)
            .set('client_id', environment.keycloak.clientId)
            .set('grant_type', 'password');

        return this.httpClient
            .post<TokenInterface>(url, body)
            .pipe(
                tap(token => this.setToken(token)),
                map(() => this._decodedToken().uuid),
                switchMap(uuid => this.companyService.getCompany(uuid)),
                tap(authUser => (this._authUser = authUser))
            )
            .pipe(
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

    public setToken(token: TokenInterface) {
        this._token = token;
        localStorage.setItem(TOKEN_KEY, token.access_token);
    }

    public getToken(): string {
        return this._token && this._token.access_token
            ? this._token.access_token
            : localStorage.getItem(TOKEN_KEY);
    }

    public getAuthUser(): Company {
        return this._authUser;
    }

    private _decodedToken(): AccessTokenInterface {
        return jwt_decode(this._token.access_token);
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from 'src/app/models/company/company';
import { TokenInterface } from 'src/app/services/auth/interfaces/token.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    private _token$: BehaviorSubject<TokenInterface> = new BehaviorSubject(null);

    private _authUser$: BehaviorSubject<Company> = new BehaviorSubject(null);

    private _isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(null);

    public clear() {
        this._token$.next(null);
        this._authUser$.next(null);
        this._isAuthenticated$.next(null);
    }

    public set token(token: TokenInterface) {
        this._token$.next(token);
    }

    public get token(): TokenInterface {
        return this._token$.value;
    }

    public getToken(): Observable<TokenInterface> {
        return this._token$.asObservable();
    }

    public set authUser(authUser: Company) {
        this._authUser$.next(authUser);
    }

    public get authUser(): Company {
        return this._authUser$.value;
    }

    public getAuthUser(): Observable<Company> {
        return this._authUser$.asObservable();
    }

    public set isAuthenticated(isAuthenticated: boolean) {
        this._isAuthenticated$.next(isAuthenticated);
    }

    public get isAuthenticated(): boolean {
        return this._isAuthenticated$.value;
    }

    public getIsAuthenticated(): Observable<boolean> {
        return this._isAuthenticated$.asObservable();
    }
}

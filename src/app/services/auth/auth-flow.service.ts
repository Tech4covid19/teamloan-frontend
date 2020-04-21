import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthenticationStrategy } from 'src/app/services/auth/interfaces/authentication.strategy';

@Injectable()
export class AuthFlowService extends AuthenticationStrategy {
    constructor(private authService: AuthService, private authUserService: AuthUserService) {
        super();
    }

    public authenticate(credentials: { username: string; password: string }): Observable<AuthUser> {
        return this.authService
            .authenticate(credentials)
            .pipe(switchMap(() => this.authUserService.getAuthUser()));
    }
}

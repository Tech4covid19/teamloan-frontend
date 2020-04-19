import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/models/auth-user/auth-user';

export abstract class AuthenticationStrategy {
    public abstract authenticate(credentials: {
        username: string;
        password: string;
    }): Observable<AuthUser>;
}

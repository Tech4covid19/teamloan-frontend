import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProspectService {
    private _type = 'prospect';

    constructor(private httpClient: HttpClient) {}

    public createProspect(data: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        };

        return this.httpClient.post(`${environment.keycloak.url}${this._type}`, data, httpOptions);
    }
}

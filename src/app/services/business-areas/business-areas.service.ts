import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BusinessArea } from 'src/app/screens/register/register-user.viewmodel';
import { environment } from 'src/environments/environment';

@Injectable()
export class BusinessAreasService {

    constructor(private httpClient: HttpClient) {}

    public get(): Observable<BusinessArea[]> {
        return this.httpClient.get(`${environment.backend.url}business-areas`)
        .pipe(
            map((resp: any) => resp.map(i => ({
                name: i.name,
                uuid: i.uuid
            })))
        );
    }
}
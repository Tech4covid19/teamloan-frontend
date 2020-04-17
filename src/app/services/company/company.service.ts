import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company, CompanyInteface } from 'src/app/models/company';
import { BaseService } from 'src/app/services/base-service/base.service';
import { environment } from 'src/environments/environment';
import { UUID } from 'src/app/models/uuid-object';
import { BusinessArea } from 'src/app/screens/register/register-user.viewmodel';

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends BaseService {
    public getCompany(companyId: string): Observable<Company> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.TYPE}/${companyId}`;

        return this.httpClient.get<CompanyInteface>(url, httpOptions).pipe(
            map(companyInteface => new Company(companyInteface)),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    public save(company: Company): Observable<UUID> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.TYPE}`;
        return this.httpClient.post(url, company, httpOptions).pipe(
            map((resp: any) => ({
                uuid: resp.uuid
            }))
        );
    }

    // TODO: refactor
    public requestResetPassword(email: string): Observable<BusinessArea[]> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.TYPE}`;
        return this.httpClient.get(`${environment.backend.url}business-areas`).pipe(
            map((resp: any) =>
                resp.map(i => ({
                    name: i.name,
                    uuid: i.uuid
                }))
            )
        );
        // return this.httpClient.post(url, email, httpOptions).pipe(
        //     map((resp: any) => ({
        //         uuid: resp.uuid
        //     }))
        // );
    }
}

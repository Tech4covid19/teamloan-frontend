import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company, CompanyInterface } from 'src/app/models/company';
import { BaseService } from 'src/app/services/base-service/base.service';
import { environment } from 'src/environments/environment';
import { UUID } from 'src/app/models/uuid-object';

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends BaseService {
    public getCompany(companyId: string): Observable<Company> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.TYPE}/${companyId}`;

        return this.httpClient.get<CompanyInterface>(url, httpOptions).pipe(
            map(companyInterface => new Company(companyInterface)),
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
}

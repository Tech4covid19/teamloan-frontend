import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company, CompanyInteface } from 'src/app/models/company';
import { BaseService } from 'src/app/services/base-service/base.service';
import { environment } from 'src/environments/environment';

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
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/models/company/company';
import { CompanyInterface } from 'src/app/models/company/company.interface';
import { UUID } from 'src/app/models/uuid-object';
import { BaseService } from 'src/app/services/base-service/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompanyService extends BaseService {
    public getCompany(companyId: string): Observable<Company> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.URL}/${companyId}`;

        return this.httpClient
            .get<CompanyInterface>(url, httpOptions)
            .pipe(map(companyInterface => new Company(companyInterface)));
    }

    public save(company: Company): Observable<UUID> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.URL}`;
        return this.httpClient.post(url, company, httpOptions).pipe(
            map((resp: any) => ({
                uuid: resp.uuid
            }))
        );
    }

    public activate(activationToken: string): Observable<any> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${Company.URL}/activation/${activationToken}`;
        return this.httpClient.post(url, {}, httpOptions);
    }
}

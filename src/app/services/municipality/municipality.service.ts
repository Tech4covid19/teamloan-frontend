import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { District } from 'src/app/models/district/district';
import { Municipality } from 'src/app/models/municipality/municipality';
import { BaseService, METHOD } from 'src/app/services/base-service/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MunicipalityService extends BaseService {
    public get(districtId: string): Observable<Municipality[]> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${District.URL}/${districtId}/${Municipality.URL}`;

        return this.request<Municipality[]>(METHOD.GET, url, httpOptions).pipe(
            map(data => {
                let items = [];
                if (Array.isArray(data)) {
                    items = data.map(item => new Municipality(item));
                }
                return items;
            })
        );
    }
}

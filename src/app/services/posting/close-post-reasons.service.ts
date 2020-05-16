import { Injectable } from '@angular/core';
import { BaseService, METHOD } from '../base-service/base.service';
import { ClosePostReason } from 'src/app/models/posting/close-post-reason';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClosePostReasonsService extends BaseService {
    public get(): Observable<ClosePostReason[]> {
        const httpOptions = { headers: this.headers };
        const url = `${environment.backend.url}${ClosePostReason.URL}`;

        // TODO: remove tests
        const itemsTest = [
            new ClosePostReason({ description: 'Porque sim!', uuid: '123' }),
            new ClosePostReason({ description: 'Fiz match!', uuid: '456' }),
            new ClosePostReason({ description: 'Outro', uuid: '789' })
        ];

        return of(itemsTest);

        return this.request<ClosePostReason[]>(METHOD.GET, url, httpOptions).pipe(
            map(data => {
                let items = [];
                if (Array.isArray(data)) {
                    items = data.map(item => new ClosePostReason(item));
                }
                return items;
            })
        );
    }
}

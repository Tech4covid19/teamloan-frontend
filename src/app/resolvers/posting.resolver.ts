import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user/auth-user';
import { Posting } from '../models/posting/posting';
import { AuthUserService } from '../services/auth/auth-user.service';
import { PostingService } from '../services/posting/posting.service';

@Injectable()
export class PostingResolver implements Resolve<Posting> {

    constructor(
        private postingService: PostingService,
        private authUserService: AuthUserService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Posting> {
        return this.toPromise(this.authUserService.getAuthUser()
        .pipe(
            mergeMap((user: AuthUser) => this.getPosting(route.params.id, user.uuid))
        ));
    }

    private getPosting(postingId: string, userId: string): Observable<Posting> {
        return this.postingService.getById(postingId, userId);
    }

    private toPromise(o: Observable<Posting>): Promise<Posting> {
        return new Promise((resolve, reject) => {
            o.subscribe((res) => resolve(res), (err) => reject(err));
        });
    }

}

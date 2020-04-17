import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Jobs } from 'src/app/models/jobs/jobs';

@Injectable({
    providedIn: 'root'
})
export class JobsStore {
    private _jobs: BehaviorSubject<Jobs[]> = new BehaviorSubject([]);

    public set jobs(jobs: Jobs[]) {
        this._jobs.next(jobs);
    }

    public get jobs(): Jobs[] {
        return this._jobs.value;
    }

    public getJobss(): Observable<Jobs[]> {
        return this._jobs.asObservable();
    }
}

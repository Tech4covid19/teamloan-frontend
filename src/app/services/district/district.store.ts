import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { District } from 'src/app/models/district/district';

@Injectable({
    providedIn: 'root'
})
export class DistrictStore {
    private _districts: BehaviorSubject<District[]> = new BehaviorSubject([]);

    public set districts(districts: District[]) {
        this._districts.next(districts);
    }

    public get districts(): District[] {
        return this._districts.value;
    }

    public getDistricts(): Observable<District[]> {
        return this._districts.asObservable();
    }
}

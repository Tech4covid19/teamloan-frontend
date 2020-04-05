import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cookies-notice',
    templateUrl: './cookies-notice.component.html',
    styleUrls: ['./cookies-notice.component.scss'],
})
export class CookiesNoticeComponentComponent implements OnInit {
    public accepted = true;

    private _storageKey = 'cookies-acceptance';
    p;
    constructor() {}

    ngOnInit(): void {
        this.accepted = !!localStorage.getItem(this._storageKey);
    }

    public onAccept() {
        this.accepted = true;
        localStorage.setItem(this._storageKey, 'true');
    }
}

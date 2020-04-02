import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cookies-notice-component',
    templateUrl: './cookies-notice-component.component.html',
    styleUrls: ['./cookies-notice-component.component.scss'],
})
export class CookiesNoticeComponentComponent implements OnInit {
    public accepted = true;

    private _storageKey = 'cookies-acceptance';

    constructor() {}

    ngOnInit(): void {
        this.accepted = !!localStorage.getItem(this._storageKey);
    }

    public onAccept() {
        this.accepted = true;
        localStorage.setItem(this._storageKey, 'true');
    }
}

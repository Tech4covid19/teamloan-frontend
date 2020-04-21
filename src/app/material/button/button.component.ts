import { Component, Input } from '@angular/core';

export enum THEME {
    MAIN = 'main',
    SECUNDARY = 'secundary',
    SMALL_ACTION = 'small-action'
}

export enum SIZE {
    AUTO = 'auto',
    FIT = 'fit'
}

export enum ICON_STATUS {
    LOADING = 'loading',
    CHECK = 'success',
    ERROR = 'error'
}

const ICON_STATUS_URL = {
    [ICON_STATUS.LOADING]: '/assets/img/icons/spinner.svg',
    [ICON_STATUS.CHECK]: '/assets/img/icons/check.svg',
    [ICON_STATUS.ERROR]: '/assets/img/icons/error.svg'
};

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input()
    public url: string;

    @Input()
    public iconStatus: string;

    @Input()
    public label: string;

    @Input()
    public type: string;

    @Input()
    public theme: string = THEME.MAIN;

    @Input()
    public size: string = SIZE.AUTO;

    @Input()
    public newPageUrl = false;

    @Input()
    public externalUrl = false;

    public iconStatusUrl = ICON_STATUS_URL;
}

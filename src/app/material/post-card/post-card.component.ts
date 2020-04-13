import { Component, Input } from '@angular/core';
import { THEME } from 'src/app/material/button/button.component';

export enum ACTIONS {
    CONTACT = 'contact',
    SHARE = 'share'
}

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
    @Input()
    public cover: string;

    @Input()
    public title: string;

    @Input()
    public amount: string;

    @Input()
    public subTitle: string;

    @Input()
    public schedule: string;

    public actionsMap = ACTIONS;

    public buttonTheme = THEME.SMALL_ACTION;

    public buttonsAction: any = {};

    private _actions: string[];

    @Input()
    public set actions(actions: string[]) {
        this._actions = actions;
        actions.map(action => {
            this.buttonsAction[action] = true;
        });
    }

    public get actions(): string[] {
        return this._actions;
    }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'teamloan-frontend';

    constructor(public router: Router) {
        this.router.events.subscribe(event => {
            if (environment.googleAnalytics.userId && event instanceof NavigationEnd) {
                gtag('config', environment.googleAnalytics.userId, {
                    page_path: event.urlAfterRedirects,
                });
            }
        });
    }
}

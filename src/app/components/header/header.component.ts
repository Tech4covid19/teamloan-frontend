import { Location } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MenuDataRoutesInterface } from 'src/app/interfaces/menu-data.interface';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

const MENU_HEIGTH_BRACKPOINT = 50;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    public isHomePage: boolean;

    public isUserAuthenticated: boolean;

    public currentUrl: string;

    public menus: MenuDataRoutesInterface[];

    public smallMenu = false;

    public logoutIcon = {
        url: '/assets/img/icons/logout.svg',
        theme: LINK_ICON_SIZES.REGULAR
    };

    private _subscriptions$ = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private location: Location,
        private authService: AuthService
    ) {
        this.isUserAuthenticated = this.authService.isAuthenticated();
    }

    ngOnInit() {
        this.router.events
            .pipe(
                takeUntil(this._subscriptions$),
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => this._onNavigation());
    }

    ngOnDestroy() {
        this._subscriptions$.next();
        this._subscriptions$.complete();
    }

    public navigateBack() {
        this.location.back();
    }

    @HostListener('document:scroll')
    public onScroll() {
        const scrollPosition: number =
            window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        this.smallMenu = scrollPosition > MENU_HEIGTH_BRACKPOINT;
    }

    private _onNavigation() {
        this.isHomePage = this.router.url === '/';
        let route = this.activatedRoute;
        while (route.firstChild) {
            route = route.firstChild;
        }
        this.menus = route.snapshot.data.routes;
    }
}

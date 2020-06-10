import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-section-intro',
    templateUrl: './section-intro.component.html',
    styleUrls: ['./section-intro.component.scss']
})
export class SectionIntroComponent implements OnInit {
    public isAuthenticated = false;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService
            .isAuthenticated()
            .subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    templateUrl: './logout-screen.component.html'
})
export class LogoutViewComponent {
    constructor(private router: Router, private authService: AuthService) {
        this.authService.unauthenticate().subscribe();
    }
}

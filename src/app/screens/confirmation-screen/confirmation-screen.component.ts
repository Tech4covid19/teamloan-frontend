import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-confirmation-screen',
    templateUrl: './confirmation-screen.component.html',
    styleUrls: ['./confirmation-screen.component.scss']
})
export class ConfirmationScreenComponent {
    email = '';

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.paramMap.pipe(map(() => window.history.state)).subscribe(data => {
            data.email ? this.email = data.email : this.router.navigate(['login']);
        });
    }
}

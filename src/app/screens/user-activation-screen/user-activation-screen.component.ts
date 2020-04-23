import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
    selector: 'app-user-activation-screen',
    templateUrl: './user-activation-screen.component.html',
    styleUrls: ['./user-activation-screen.component.scss']
})
export class UserActivationScreenComponent implements OnInit, OnDestroy {
    public feedback: FeedbackInterface;

    private _subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private companyService: CompanyService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this._subscription = this.route.paramMap.subscribe((params: any) => {
            this._activate(params.params.token);
        });
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

    private _activate(token: string) {
        this.authService.unauthenticate(false).subscribe(
            () => {
                this.companyService.activate(token).subscribe(
                    () => {
                        this._redirectToConfirmPage(true);
                    },
                    () => {
                        this._redirectToConfirmPage(false);
                    }
                );
            },
            () => {
                this._redirectToConfirmPage(false);
            }
        );
    }

    private _redirectToConfirmPage(success: boolean) {
        this.feedback = {
            status: success ? FEEDBACK_STATUS.SUCCESS : FEEDBACK_STATUS.FAIL,
            title: success ? 'Activação de conta' : 'Ocorreu um erro!',
            subTitle: success
                ? 'A sua conta foi activada com sucesso'
                : 'Por favor tente novamente',
            actionLabel: 'Iniciar sessão',
            url: success ? 'login' : null
        };
    }
}

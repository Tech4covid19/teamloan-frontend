import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';

@Component({
    selector: 'app-confirmation-screen',
    templateUrl: './confirmation-screen.component.html',
    styleUrls: ['./confirmation-screen.component.scss']
})
export class ConfirmationScreenComponent {
    public feedback: FeedbackInterface = {
        status: FEEDBACK_STATUS.SUCCESS,
        title: undefined,
        subTitle: undefined,
        text: undefined,
        actionLabel: undefined,
        url: ''
    };

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.paramMap
            .pipe(map(() => window.history.state))
            .subscribe((feedback: FeedbackInterface) => this._navigateWithFeedback(feedback));
    }

    private _navigateWithFeedback(feedback: FeedbackInterface) {
        Object.assign(this.feedback, feedback);
        if (!this.feedback.title && !this.feedback.subTitle && !this.feedback.text) {
            this.router.navigate([this.feedback.url]);
        }
    }
}

import { Component, Input } from '@angular/core';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
    @Input()
    public set feedback(feedback: FeedbackInterface) {
        this._feedback = Object.assign(
            {
                status: FEEDBACK_STATUS.LOADING,
                title: 'Por favor, aguarde ...'
            },
            feedback
        );
    }

    public get feedback(): FeedbackInterface {
        return this._feedback;
    }

    public feedbackStatus = FEEDBACK_STATUS;

    private _feedback: FeedbackInterface;
}

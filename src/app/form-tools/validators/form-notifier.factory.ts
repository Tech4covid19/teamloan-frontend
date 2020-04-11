import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Way to notify child forms that their form controls should be validated
 */
export interface FormNotifier {
    triggerValidation: () => void;
    getObservable: () => Observable<any>;
}

/**
 * Parent form should get a instance of FormNotifier through the FormNotifierFactory.create
 * and when submit method is called, it should call triggerValidation method
 * child form components should have the reference to the FormNotifier
 * so they can listen to the triggerValidation event
 */
@Injectable()
export class FormNotifierFactory {
    public create(): FormNotifier {
        const subject = new Subject();
        return {
            triggerValidation: () => subject.next(),
            getObservable: () => subject.asObservable()
        };
    }
}

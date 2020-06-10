import { Injectable } from '@angular/core';

declare let gtag: Function;

export interface GAErrorReport {
    eventName: string;
    eventCategory: string;
    eventAction: string;
    eventLabel?: string;
    eventValue?: number;
}

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {
    constructor() {}

    public eventEmitter(errorReport: GAErrorReport) {
        gtag('event', errorReport.eventName, {
            event_category: errorReport.eventCategory,
            event_action: errorReport.eventAction,
            event_label: errorReport.eventLabel ? errorReport.eventLabel : null,
            value: errorReport.eventValue ? errorReport.eventValue : null
        });
    }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { THEME } from 'src/app/material/button/button.component';
import { Subscription } from 'rxjs';

export interface FilterChangeEvent {
    intent: INTENT;
    sector: string;
    location: string;
    function: string;
}

export enum INTENT {
    SEEKER = 'seeker',
    LENDER = 'lender'
}

@Component({
    selector: 'app-filter-toolbar',
    templateUrl: './filter-toolbar.component.html',
    styleUrls: ['./filter-toolbar.component.scss']
})
export class FilterToolbarComponent implements OnInit {
    @Input()
    sectorOptions: InputSelectOption[] = [];
    @Input()
    locationOptions: InputSelectOption[] = [];
    @Input()
    functionOptions: InputSelectOption[] = [];

    // @Output() onAvailableTeams;
    // @Output() onTeamRequests;
    // @Output() onChangeSector;
    // @Output() onChangeLocalization;
    // @Output() onChangeFunction;
    @Output() onFilterChange = new EventEmitter<FilterChangeEvent>();

    form: FormGroup;
    onChangesSubscription: Subscription;

    intent = INTENT;
    currentIntent = INTENT.SEEKER;
    seekerTheme = THEME.MAIN;
    lenderTheme = THEME.SECUNDARY;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            sector: null,
            location: null,
            function: null
        });

        // TODO: remove this block
        for (let i = 0; i < 15; i++) {
            this.sectorOptions.push({
                key: `sector${i}`,
                label: `sector Option ${i}`
            });
            this.locationOptions.push({
                key: `location${i}`,
                label: `location Option ${i}`
            });
            this.functionOptions.push({
                key: `function${i}`,
                label: `function Option ${i}`
            });
        }

        this.onChanges();
    }

    ngOnDestroy(): void {
        this.onChangesSubscription.unsubscribe();
    }

    onChanges(): void {
        this.onChangesSubscription = this.form.valueChanges.subscribe(() => {
            this.emitFilterChangeEvent();
        });
    }

    onIntentChange(newIntent: INTENT) {
        this.currentIntent = newIntent;
        this.changeIntentTheme(newIntent);
        this.emitFilterChangeEvent();
    }

    public emitFilterChangeEvent() {
        // TODO: remove this log
        console.log({
            intent: this.currentIntent,
            sector: this.form.value.sector,
            location: this.form.value.location,
            function: this.form.value.function
        });

        this.onFilterChange.emit({
            intent: this.currentIntent,
            sector: this.form.value.sector,
            location: this.form.value.location,
            function: this.form.value.function
        });
    }

    private changeIntentTheme(newIntent: INTENT) {
        switch (newIntent) {
            case INTENT.SEEKER:
                this.seekerTheme = THEME.MAIN;
                this.lenderTheme = THEME.SECUNDARY;
                break;
            case INTENT.LENDER:
                this.seekerTheme = THEME.SECUNDARY;
                this.lenderTheme = THEME.MAIN;
                break;
        }
    }
}

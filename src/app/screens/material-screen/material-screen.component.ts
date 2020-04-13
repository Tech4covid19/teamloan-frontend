import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { ACTIONS } from 'src/app/material/post-card/post-card.component';

@Component({
    selector: 'app-material-screen',
    templateUrl: './material-screen.component.html',
    styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent {
    form: FormGroup;

    inputSelectOptionsSmall: InputSelectOption[] = [];

    inputSelectOptionsLarge: InputSelectOption[] = [];

    actions = [ACTIONS.CONTACT, ACTIONS.SHARE];

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            inputText: ['', Validators.required],
            password: null,
            selectBoxSmall: null,
            selectBoxLarge: null,
            checkbox: null
        });

        for (let i = 0; i < 15; i++) {
            this.inputSelectOptionsSmall.push({
                key: `key${i}`,
                label: `Option ${i}`
            });

            this.inputSelectOptionsLarge.push({
                key: `key${i}`,
                label: `Option random large text Option random large text Option random large text Option random large text ${i}`
            });
        }
    }
}

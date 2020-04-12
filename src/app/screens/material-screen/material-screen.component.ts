import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';

@Component({
    selector: 'app-material-screen',
    templateUrl: './material-screen.component.html',
    styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent {
    form: FormGroup;

    inputSelectOptionsSmall: InputSelectOption[] = [];

    inputSelectOptionsLarge: InputSelectOption[] = [];

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            inputText: null,
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

    onFilterToolbarChange(event) {
        console.log(event);
    }
}

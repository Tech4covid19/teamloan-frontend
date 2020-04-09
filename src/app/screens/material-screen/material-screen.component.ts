import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-material-screen',
    templateUrl: './material-screen.component.html',
    styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            inputText: null,
            password: null
        });

        this.form.valueChanges.subscribe(value => console.log(value));
    }
}

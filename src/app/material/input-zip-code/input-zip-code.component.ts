import { Component, OnInit, Input } from '@angular/core';
import { BaseControlValueAccessor } from 'src/app/form-tools/value-accessors/base.cva';

@Component({
    selector: 'app-input-zip-code',
    templateUrl: './input-zip-code.component.html',
    styleUrls: ['./input-zip-code.component.scss']
})
export class InputZipCodeComponent {
    @Input()
    controlName: string;

    @Input()
    errors: any;

    // public errors = {
    //     required: false,
    //     format: false
    // };
}

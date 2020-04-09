import { OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export class BaseControlValueAccessor implements ControlValueAccessor, OnInit {
    public value: any;

    public formControl: FormControl;

    protected onChangeValue: any;

    protected markAsTouched: any;

    constructor(@Optional() @Self() public controlDir: NgControl) {
        if (this.controlDir) {
            controlDir.valueAccessor = this;
        }
    }

    ngOnInit() {
        if (this.controlDir) {
            this.formControl = this.controlDir.control as FormControl;
            this.writeValue(this.formControl.value);
        }
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChangeValue = fn;
    }

    registerOnTouched(fn: any): void {
        this.markAsTouched = fn;
    }
}

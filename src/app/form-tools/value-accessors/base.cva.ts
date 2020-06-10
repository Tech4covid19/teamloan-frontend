import { OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export class BaseControlValueAccessor implements ControlValueAccessor, OnInit {
    public value: any;

    public formControl: FormControl;

    public isRequired = false;

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
            this.isRequired = this.isRequiredField(this.formControl);
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

    public isRequiredField(abstractControl: AbstractControl): boolean {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({} as AbstractControl);
            if (validator && validator.required) {
                return true;
            }
        }

        if (abstractControl['controls']) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.isRequiredField(abstractControl['controls'][controlName])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

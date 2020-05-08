import { Injectable } from '@angular/core';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@Injectable()
export class EditFormControl extends FormControlConfig {
    public get(value: any): any {
        return { value, disabled: true };
    }

    public isDisabled() {
        return false;
    }
}

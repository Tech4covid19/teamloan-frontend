import { Injectable } from '@angular/core';

@Injectable()
export class FormControlConfig {
    public get(value: any): any {
        return value;
    }

    public isDisabled() {
        return false;
    }
}

@Injectable()
export class FormControlDisabled extends FormControlConfig {
    public get(value: any): any {
        return { value, disabled: true };
    }

    public isDisabled() {
        return true;
    }
}

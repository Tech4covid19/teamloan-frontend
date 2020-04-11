import { FormControl } from '@angular/forms';

const regex = /\d{9,}/;

export function PhoneValidator(formControl: FormControl) {
    if ( regex.test(formControl.value) ) {
        return null;
    }
    return {
        format: true
    };
}
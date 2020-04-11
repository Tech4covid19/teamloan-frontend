import { FormControl } from '@angular/forms';

const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

export function EmailValidator(formControl: FormControl) {
    if ( regex.test(formControl.value) ) {
        return null;
    }
    return {
        format: true
    };
}

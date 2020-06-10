import { FormControl } from '@angular/forms';

const regex = /^\d{4}-\d{3}?$/;

export function PostalCodeValidator(formControl: FormControl) {
    if (regex.test(formControl.value)) {
        return null;
    }
    return {
        format: true
    };
}

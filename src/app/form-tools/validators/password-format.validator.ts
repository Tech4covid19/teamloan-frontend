import { FormControl } from '@angular/forms';

const regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[^A-Za-z0-9]){1,})(?!.*\s).{9,100}$/;

export function PasswordFormatValidator(formControl: FormControl) {
    if ( regex.test(formControl.value) ) {
        return null;
    }
    return {
        format: true
    };
}

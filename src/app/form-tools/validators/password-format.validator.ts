import { FormControl } from '@angular/forms';

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\[$&,:;=?@#|'<>.\-^*()%!\]])[A-Za-z\d\[$&,:;=?@#|'<>.\-^*()%!\]]{9,100}$/;

export function PasswordFormatValidator(formControl: FormControl) {
    if (regex.test(formControl.value)) {
        return null;
    }
    return {
        format: true
    };
}

import { FormGroup } from '@angular/forms';

export function TermsValidator(checkboxControlName: string) {
    return function _termsValidator(formGroup: FormGroup) {
        return formGroup.get(checkboxControlName).value ? null : { terms: true };
    };
}

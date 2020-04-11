import { FormGroup } from '@angular/forms';

export function MatchValidator(firstInput: string, secondInput: string) {
    return (formGroup: FormGroup) => {
        if ( formGroup.get(firstInput).pristine || formGroup.get(secondInput).pristine ) {
            return null;
        }
        if ( formGroup.get(firstInput).value !== formGroup.get(secondInput).value ) {
            return {
                match: true
            };
        }
        return null;
    };
}
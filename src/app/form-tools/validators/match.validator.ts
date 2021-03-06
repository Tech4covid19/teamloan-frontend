import { FormGroup } from '@angular/forms';

export function MatchValidator(firstInput: string, secondInput: string) {
    return (formGroup: FormGroup) => {
        const originControl = formGroup.get(firstInput);
        const matchControl = formGroup.get(secondInput);

        if (originControl.pristine || matchControl.pristine) {
            return null;
        }

        if (matchControl.errors && !matchControl.errors.match) {
            return null;
        }

        if (originControl.value !== matchControl.value) {
            matchControl.setErrors({ match: true });
        } else {
            matchControl.setErrors(null);
        }
    };
}

import { FormGroup } from '@angular/forms';

export function MatchValidator(firstInput: string, secondInput: string) {
    return (formGroup: FormGroup) => {
        const originControl = formGroup.get(firstInput);
        const matchControl = formGroup.get(secondInput);

        if (originControl.pristine || matchControl.pristine) {
            return;
        }

        if (matchControl.errors && !matchControl.errors.match) {
            return;
        }

        if (originControl.value !== matchControl.value) {
            matchControl.setErrors({ match: true });
        } else {
            matchControl.setErrors(null);
        }
    };
}

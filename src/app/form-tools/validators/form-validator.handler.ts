import { FormGroup } from '@angular/forms';

export class FormValidatorHandler {
    public static updateValidationState(form: FormGroup, errors: any) {
        Object.keys(form.controls).forEach(key => {
            if (!errors[key]) {
                return;
            }

            errors[key].required = FormValidatorHandler.hasError(form, key, 'required');
            errors[key].format = FormValidatorHandler.hasError(form, key, 'format');
            errors[key].match = FormValidatorHandler.hasError(form, key, 'match');

            if (errors[key].required) {
                errors[key].format = false;
                errors[key].match = false;
            }
        });
    }

    public static hasError(form: FormGroup, control: string, errorName: string): boolean {
        return form.get(control).hasError(errorName) && form.get(control).touched;
    }

    public static markAllAsTouched(form: FormGroup) {
        Object.keys(form.controls).forEach(key => {
            form.get(key).markAsTouched();
        });
    }
}

import { InjectionToken } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface FormGeneratorService {
    getForm(): FormGroup;
}

export const FormGeneratorServiceToken = new InjectionToken<FormGeneratorService>('FormGeneratorService');
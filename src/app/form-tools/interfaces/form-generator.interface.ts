import { FormGroup } from '@angular/forms';
import { InjectionToken } from '@angular/core';

export interface FormGeneratorService {
    getForm(): FormGroup;
}

export const FormGeneratorServiceToken = new InjectionToken<FormGeneratorService>('FormGeneratorService');
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@Injectable()
export class EquipaFormService implements FormGeneratorService {
    constructor(
        private fb: FormBuilder,
        private formConfig: FormControlConfig
    ) {}

    public getForm(): FormGroup {
        return this.fb.group({
            distrito: [this.formConfig.get(''), Validators.required],
            concelho: [this.formConfig.get(''), Validators.required],
            nome: [this.formConfig.get(''), Validators.required],
            jobsData: [],
            obs: [this.formConfig.get('')]
        });
    }
}


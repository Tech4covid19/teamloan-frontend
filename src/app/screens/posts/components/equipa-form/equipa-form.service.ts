import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@Injectable()
export class EquipaFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder, private formConfig: FormControlConfig) {}

    public getForm(): FormGroup {
        return this.fb.group({
            intent: [this.formConfig.get(''), Validators.required],
            distrito: ['', Validators.required],
            concelho: ['', Validators.required],
            nome: ['', Validators.required],
            jobsData: [],
            obs: ['']
        });
    }
}

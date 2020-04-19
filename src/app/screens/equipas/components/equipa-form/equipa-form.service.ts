import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGeneratorService } from 'src/app/form-tools/interfaces/form-generator.interface';

@Injectable()
export class EquipaFormService implements FormGeneratorService {
    constructor(private fb: FormBuilder) {}

    public getForm(): FormGroup {
        return this.fb.group({
            distrito: ['', Validators.required],
            concelho: ['', Validators.required],
            nome: ['', Validators.required],
            jobsData: []
        });
    }
}


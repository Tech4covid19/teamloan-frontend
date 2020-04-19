import { Component, forwardRef, Inject, OnChanges, OnDestroy } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormGeneratorService, FormGeneratorServiceToken } from 'src/app/form-tools/interfaces/form-generator.interface';
import { SimpleFormValueAccessor } from 'src/app/form-tools/value-accessors/simple-form.value.accessor';
import { EquipaViewModel } from './equipa.viewmodel';
import { EquipaFormService } from './equipa-form.service';

@Component({
    selector: 'app-equipa-form',
    templateUrl: './equipa-form.component.html',
    styleUrls: ['./equipa-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EquipaFormComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EquipaFormComponent),
            multi: true
        },
        {
            provide: FormGeneratorServiceToken,
            useClass: EquipaFormService
        }
    ]
})
export class EquipaFormComponent extends SimpleFormValueAccessor<EquipaViewModel> implements OnChanges, OnDestroy {

    public errors = {
        distrito: {
            required: false
        },
        concelho: {
            required: false
        },
        nome: {
            required: false
        }
    };

    constructor(@Inject(FormGeneratorServiceToken)  equipaFormService: FormGeneratorService) {
        super(equipaFormService);
    }

    ngOnChanges() {
    }

    validate(_: FormControl) {
        return this.form.valid ? null : { equipa: true };
    }

    public getErrors() {
        return this.errors;
    }

}


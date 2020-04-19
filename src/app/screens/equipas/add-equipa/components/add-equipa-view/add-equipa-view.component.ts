import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { FormNotifier, FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';

@Component({
    selector: 'app-add-equipa-view',
    templateUrl: './add-equipa-view.component.html',
    styleUrls: ['./add-equipa-view.component.scss']
})
export class AddEquipaViewComponent {

    public form: FormGroup;
    public notifier: FormNotifier;

    public jobsArray = [
        { name: 'porra', quantity: 1, last: false },
        { name: 'it', quantity: 2, last: true },
    ];

    constructor(private fb: FormBuilder, private formNotifierFactory: FormNotifierFactory) {
        this.form = this.getForm();
        this.notifier = this.formNotifierFactory.create();
    }

    public submit() {
        this.notifier.triggerValidation();
        console.log('form', this.form);
        debugger;
    }

    private getForm(): FormGroup {
        return this.fb.group({
            equipa: null,
        });
        /*return this.fb.group({
            equipa: {
                distrito: 'testdistrict',
                concelho: 'testeconcelho',
                nome: 'teste nome',
                jobsData: { jobs: this.jobsArray }
            },
        });*/
    }

}

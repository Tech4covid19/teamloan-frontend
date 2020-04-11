import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { OnSubmitEvent } from './components/register-form/register-form.component';
import { RegisterConverters } from './converters/register.converters';
import { BusinessArea } from './register-user.viewmodel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register-screen',
    templateUrl: './register-screen.component.html',
    styleUrls: ['./register-screen.component.scss'],
})
export class RegisterScreenComponent {

    public businessAreaOptions: InputSelectOption[] = [];

    constructor(
        private businessAreaService: BusinessAreasService,
        private companiesService: CompanyService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.businessAreaService.get()
        .pipe(map((itens) => this.getInputSelectOptions(itens)))
        .subscribe(inputs => {
            this.businessAreaOptions = inputs;
        });
    }

    public onSubmit(submitEvent: OnSubmitEvent) {
        const company = RegisterConverters.registerFormToPayload(submitEvent.data);
        this.companiesService.save(company)
        .pipe(tap(() => submitEvent.callback()))
        .subscribe((resp) => this.redirectToConfirmPage(), (err) => submitEvent.callback(err));
    }

    private getInputSelectOptions(businessAreas: BusinessArea[]): InputSelectOption[] {
        return businessAreas.map(item => RegisterConverters.businessAreaToInputOption(item));
    }

    private redirectToConfirmPage() {
        this.router.navigate(['confirmation']);
    }
}
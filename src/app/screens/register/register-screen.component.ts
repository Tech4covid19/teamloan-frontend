import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { OnSubmitEvent } from './components/register-form/register-form.component';
import { RegisterConverters } from './converters/register.converters';
import { BusinessArea } from './register-user.viewmodel';

@Component({
    selector: 'app-register-screen',
    templateUrl: './register-screen.component.html',
    styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
    public businessAreaOptions: InputSelectOption[] = [];

    constructor(
        private businessAreaService: BusinessAreasService,
        private companiesService: CompanyService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.businessAreaService
            .get()
            .pipe(map(itens => this.getInputSelectOptions(itens)))
            .subscribe(inputs => {
                this.businessAreaOptions = inputs;
            });
    }

    public onSubmit(submitEvent: OnSubmitEvent) {
        const company = RegisterConverters.registerFormToPayload(submitEvent.data);
        this.companiesService
            .save(company)
            .pipe(tap(() => submitEvent.callback()))
            .subscribe(
                resp => this.redirectToConfirmPage(company.email),
                err => submitEvent.callback(err)
            );
    }

    private getInputSelectOptions(businessAreas: BusinessArea[]): InputSelectOption[] {
        return businessAreas.map(item => RegisterConverters.businessAreaToInputOption(item));
    }

    public redirectToConfirmPage(data) {
        const state: FeedbackInterface = {
            status: FEEDBACK_STATUS.SUCCESS,
            title: 'A sua conta foi criada com sucesso',
            subTitle: 'Um e-mail de confirmação foi enviado para',
            text: data,
            actionLabel: 'Iniciar sessão',
            url: 'login'
        };
        this.router.navigateByUrl('/confirmation', { state });
    }
}

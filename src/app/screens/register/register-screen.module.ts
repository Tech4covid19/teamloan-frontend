import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyFormService } from 'src/app/components/company-form/company-form.service';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormService } from './components/user-form/user-form.service';
import { RegisterScreenComponent } from './register-screen.component';
import { RegisterScreenRoutingModule } from './register-screen.routing.module';
import { CompanyFormModule } from 'src/app/components/company-form/company-form.module';

@NgModule({
    declarations: [RegisterScreenComponent, RegisterFormComponent, UserFormComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RegisterScreenRoutingModule,
        MaterialModule,
        CommonModule,
        CompanyFormModule
    ],
    providers: [
        CompanyService,
        CompanyFormService,
        UserFormService,
        BusinessAreasService,
        FormNotifierFactory
    ]
})
export class RegisterScreenModule {}

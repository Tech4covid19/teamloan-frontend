import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';
import { CompanyService } from 'src/app/services/company/company.service';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyFormService } from './components/company-form/company-form.service';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormService } from './components/user-form/user-form.service';
import { RegisterScreenComponent } from './register-screen.component';
import { RegisterScreenRoutingModule } from './register-screen.routing.module';
import { ZipCodeDirective } from './components/company-form/zip-code.directive';

@NgModule({
    declarations: [
        RegisterScreenComponent,
        CompanyFormComponent,
        RegisterFormComponent,
        UserFormComponent,
        ZipCodeDirective
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RegisterScreenRoutingModule,
        MaterialModule,
        CommonModule
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

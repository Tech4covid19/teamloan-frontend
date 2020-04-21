import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MaterialModule } from 'src/app/material/material.module';
import { EquipaFormContainerComponent } from './equipa-form-container/equipa-form.container';
import { EquipaFormComponent } from './equipa-form/equipa-form.component';
import { EquipaFormService } from './equipa-form/equipa-form.service';
import { JobFormComponent } from './job-form/job-form.component';
import { JobFormService } from './job-form/job-form.service';
import { JobsFormComponent } from './jobs-form/jobs-form.component';
import { JobsFormService } from './jobs-form/jobs-form.service';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';

@NgModule({
    declarations: [
        JobFormComponent,
        JobsFormComponent,
        EquipaFormComponent,
        EquipaFormContainerComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CommonModule,
        AngularSvgIconModule
    ],
    exports: [
        JobFormComponent,
        JobsFormComponent,
        EquipaFormComponent,
        EquipaFormContainerComponent
    ],
    providers: [
        JobFormService,
        JobsFormService,
        EquipaFormService,
        FormControlConfig
    ]
})
export class EquipaComponentsModule {}

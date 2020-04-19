import { JobFormService } from './job-form/job-form.service';
import { JobFormComponent } from './job-form/job-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobsFormService } from './jobs-form/jobs-form.service';
import { JobsFormComponent } from './jobs-form/jobs-form.component';
import { EquipaFormComponent } from './equipa-form/equipa-form.component';
import { EquipaFormService } from './equipa-form/equipa-form.service';

@NgModule({
    declarations: [
        JobFormComponent,
        JobsFormComponent,
        EquipaFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        CommonModule,
    ],
    exports: [
        JobFormComponent,
        JobsFormComponent,
        EquipaFormComponent
    ],
    providers: [
        JobFormService,
        JobsFormService,
        EquipaFormService
    ]
})
export class EquipaComponentsModule {
}

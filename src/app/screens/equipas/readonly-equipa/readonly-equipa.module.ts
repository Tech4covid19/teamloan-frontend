import { NgModule } from '@angular/core';
import { ReadonlyEquipaViewComponent } from './components/add-equipa-view/readonly-equipa-view.component';
import { ReadonlyEquipaRoutingModule } from './readonly-equipa.routing.module';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { FormControlDisabled, FormControlConfig } from 'src/app/form-tools/form-control.config';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';

@NgModule({
    declarations: [
        ReadonlyEquipaViewComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        EquipaComponentsModule,
        CommonModule,
        ReadonlyEquipaRoutingModule
    ],
    providers: [
        FormNotifierFactory,
        {
            provide: FormControlConfig,
            useClass: FormControlDisabled
        },
        PostingResolver
    ]
})
export class ReadonlyEquipaModule {}

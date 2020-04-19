import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { AddEquipaRoutingModule } from './add-equipa.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { AddEquipaViewComponent } from './components/add-equipa-view/add-equipa-view.component';

@NgModule({
    declarations: [
        AddEquipaViewComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        AddEquipaRoutingModule,
        EquipaComponentsModule
    ],
    providers: [
        FormNotifierFactory
    ]
})
export class AddEquipaModule {}

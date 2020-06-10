import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';
import { EditFormControl } from 'src/app/screens/posts/edit-equipa/edit-form-control.config';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { EditEquipaViewComponent } from './components/add-equipa-view/edit-equipa-view.component';
import { EditEquipaRoutingModule } from './edit-equipa.routing.module';

@NgModule({
    declarations: [EditEquipaViewComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        EditEquipaRoutingModule,
        EquipaComponentsModule,
        CommonModule
    ],
    providers: [
        FormNotifierFactory,
        {
            provide: FormControlConfig,
            useClass: EditFormControl
        },
        PostingResolver
    ]
})
export class EditEquipaModule {}

import { CommonModule } from '@angular/common';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEquipaRoutingModule } from './edit-equipa.routing.module';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { EditEquipaViewComponent } from './components/add-equipa-view/edit-equipa-view.component';
import { NgModule } from '@angular/core';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';


@NgModule({
    declarations: [
        EditEquipaViewComponent
    ],
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
        PostingResolver
    ]
})
export class EditEquipaModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlConfig } from 'src/app/form-tools/form-control.config';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';
import { EditFormControl } from 'src/app/screens/posts/edit-equipa/edit-form-control.config';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { ClosePostRoutingModule } from './close-post.routing.module';
import { ClosePostViewComponent } from './components/close-post-view/close-post-view.component';

@NgModule({
    declarations: [ClosePostViewComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        ClosePostRoutingModule,
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
export class ClosePostModule {}

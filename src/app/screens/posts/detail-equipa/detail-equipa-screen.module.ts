import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PopUpModule } from 'src/app/components/pop-up/pop-up.module';
import { FormControlConfig, FormControlDisabled } from 'src/app/form-tools/form-control.config';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';
import { DetailEquipaScreenComponent } from 'src/app/screens/posts/detail-equipa/components/detail-equipa-screen.component';
import { DetailEquipaScreenRoutingModule } from 'src/app/screens/posts/detail-equipa/detail-equipa-screen.routing.module';
import { EquipaComponentsModule } from '../components/equipa-components.module';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';

@NgModule({
    declarations: [DetailEquipaScreenComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        EquipaComponentsModule,
        CommonModule,
        DetailEquipaScreenRoutingModule,
        AngularSvgIconModule,
        PopUpModule,
        FeedbackModule
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
export class DetailEquipaScreenModule {}

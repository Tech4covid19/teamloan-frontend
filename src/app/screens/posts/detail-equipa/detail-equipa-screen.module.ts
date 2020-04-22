import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormControlConfig, FormControlDisabled } from 'src/app/form-tools/form-control.config';
import { FormNotifierFactory } from 'src/app/form-tools/validators/form-notifier.factory';
import { MaterialModule } from 'src/app/material/material.module';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';
import { DetailEquipaScreenComponent } from 'src/app/screens/posts/detail-equipa/components/detail-equipa-screen.component';
import { DetailEquipaScreenRoutingModule } from 'src/app/screens/posts/detail-equipa/detail-equipa-screen.routing.module';
import { EquipaComponentsModule } from '../components/equipa-components.module';

@NgModule({
    declarations: [DetailEquipaScreenComponent],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        EquipaComponentsModule,
        CommonModule,
        DetailEquipaScreenRoutingModule,
        AngularSvgIconModule
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

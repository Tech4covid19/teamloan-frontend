import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';
import { ResetPasswordViewComponent } from './reset-password-screen.component';
import { ResetPasswordScreenRoutingModule } from './reset-password-screen.routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ResetPasswordViewComponent],
    imports: [
        CommonModule,
        ResetPasswordScreenRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        FeedbackModule
    ],
    exports: [ResetPasswordViewComponent]
})
export class ResetPasswordScreenModule {}

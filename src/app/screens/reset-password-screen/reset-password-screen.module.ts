import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';
import { ResetPasswordViewComponent } from './reset-password-screen.component';
import { ResetPasswordScreenRoutingModule } from './reset-password-screen.routing.module';

@NgModule({
    declarations: [ResetPasswordViewComponent],
    imports: [CommonModule, ResetPasswordScreenRoutingModule, FeedbackModule]
})
export class ResetPasswordScreenModule {}

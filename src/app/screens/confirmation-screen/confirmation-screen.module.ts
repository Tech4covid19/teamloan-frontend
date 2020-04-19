import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ConfirmationScreenComponent } from './confirmation-screen.component';
import { ConfirmationScreenRoutingModule } from './confirmation-screen.routing.module';

@NgModule({
    declarations: [ConfirmationScreenComponent],
    imports: [CommonModule, MaterialModule, ConfirmationScreenRoutingModule, FeedbackModule]
})
export class ConfirmationScreenModule {}

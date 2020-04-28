import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RequestPasswordViewRoutingModule } from 'src/app/screens/request-password-screen/request-password-screen-routing.module';
import { RequestPasswordViewComponent } from 'src/app/screens/request-password-screen/component/request-password-screen.component';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';

@NgModule({
    declarations: [RequestPasswordViewComponent],
    imports: [
        CommonModule,
        RequestPasswordViewRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        FeedbackModule
    ],
    exports: [RequestPasswordViewComponent]
})
export class RequestPasswordScreenModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeedbackModule } from 'src/app/components/feedback/feedback.module';
import { UserActivationScreenRoutingModule } from 'src/app/screens/user-activation-screen/user-activation-screen-routing.module';
import { UserActivationScreenComponent } from 'src/app/screens/user-activation-screen/user-activation-screen.component';

@NgModule({
    declarations: [UserActivationScreenComponent],
    imports: [CommonModule, UserActivationScreenRoutingModule, FeedbackModule]
})
export class UserActivationScreenModule {}

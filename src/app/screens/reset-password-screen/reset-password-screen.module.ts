import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { ResetPasswordViewComponent } from 'src/app/screens/reset-password-screen/component/reset-password-screen.component';
import { ResetPasswordViewRoutingModule } from 'src/app/screens/reset-password-screen/reset-password-screen-routing.module';

@NgModule({
    declarations: [ResetPasswordViewComponent],
    imports: [CommonModule, ResetPasswordViewRoutingModule, ReactiveFormsModule, MaterialModule],
    exports: [ResetPasswordViewComponent]
})
export class ResetPasswordViewModule {}

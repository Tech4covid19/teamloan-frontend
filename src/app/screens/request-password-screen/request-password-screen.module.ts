import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RequestPasswordViewRoutingModule } from 'src/app/screens/request-password-screen/request-password-screen-routing.module';
import { RequestPasswordViewComponent } from 'src/app/screens/request-password-screen/component/request-password-screen.component';

@NgModule({
    declarations: [RequestPasswordViewComponent],
    imports: [CommonModule, RequestPasswordViewRoutingModule, ReactiveFormsModule, MaterialModule],
    exports: [RequestPasswordViewComponent]
})
export class RequestPasswordViewModule {}

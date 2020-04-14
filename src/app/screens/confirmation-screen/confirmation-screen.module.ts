import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ConfirmationScreenComponent } from './confirmation-screen.component';
import { ConfirmationScreenRoutingModule } from './confirmation-screen.routing.module';

@NgModule({
    declarations: [
        ConfirmationScreenComponent
    ],
    imports: [
        MaterialModule,
        ConfirmationScreenRoutingModule
    ]
})
export class ConfirmationScreenModule {}

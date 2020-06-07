import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { PopUpComponent } from './pop-up.component';

@NgModule({
    declarations: [PopUpComponent],
    imports: [CommonModule, ReactiveFormsModule, MaterialModule],
    exports: [PopUpComponent]
})
export class PopUpModule {}

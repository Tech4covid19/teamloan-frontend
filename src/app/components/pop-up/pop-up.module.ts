import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MaterialModule } from 'src/app/material/material.module';
import { PopUpComponent } from './pop-up.component';

@NgModule({
    declarations: [PopUpComponent],
    imports: [CommonModule, MaterialModule, AngularSvgIconModule],
    exports: [PopUpComponent]
})
export class PopUpModule {}

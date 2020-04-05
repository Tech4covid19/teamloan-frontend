import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, AngularSvgIconModule],
    exports: [ButtonComponent],
})
export class ButtonModule {}

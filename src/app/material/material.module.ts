import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';
import { InputTextComponent } from 'src/app/material/input-text/input-text.component';

@NgModule({
    declarations: [InputTextComponent, ButtonComponent],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule],
    exports: [InputTextComponent, ButtonComponent]
})
export class MaterialModule {}

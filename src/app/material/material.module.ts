import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';
import { InputTextComponent } from 'src/app/material/input-text/input-text.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { PostCardComponent } from 'src/app/material/post-card/post-card.component';

@NgModule({
    declarations: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent
    ],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule],
    exports: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent
    ]
})
export class MaterialModule {}

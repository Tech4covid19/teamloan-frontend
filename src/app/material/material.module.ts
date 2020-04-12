import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';
import { InputTextComponent } from 'src/app/material/input-text/input-text.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { FilterToolbarComponent } from './filter-toolbar/filter-toolbar.component';

@NgModule({
    declarations: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        FilterToolbarComponent
    ],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule],
    exports: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        FilterToolbarComponent
    ]
})
export class MaterialModule {}

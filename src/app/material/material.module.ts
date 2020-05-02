import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';
import { InputTextComponent } from 'src/app/material/input-text/input-text.component';
import { PostCardComponent } from 'src/app/material/post-card/post-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FilterToolbarComponent } from './filter-toolbar/filter-toolbar.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { LinkComponent } from './link/link.component';
import { InputTextAreaComponent } from 'src/app/material/input-textarea/input-textarea.component';
import { InputZipCodeComponent } from './input-zip-code/input-zip-code.component';

@NgModule({
    declarations: [
        InputTextComponent,
        InputTextAreaComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent,
        LinkComponent,
        FilterToolbarComponent,
        InputZipCodeComponent
    ],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule, RouterModule],
    exports: [
        InputTextComponent,
        InputTextAreaComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent,
        LinkComponent,
        FilterToolbarComponent,
        InputZipCodeComponent
    ]
})
export class MaterialModule {}

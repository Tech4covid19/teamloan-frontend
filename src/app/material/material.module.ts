import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from 'src/app/material/button/button.component';
import { InputTextComponent } from 'src/app/material/input-text/input-text.component';
import { PostCardComponent } from 'src/app/material/post-card/post-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { LinkComponent } from './link/link.component';
import { FilterToolbarComponent } from './filter-toolbar/filter-toolbar.component';

@NgModule({
    declarations: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent,
        LinkComponent,
        FilterToolbarComponent
    ],
    imports: [CommonModule, AngularSvgIconModule, ReactiveFormsModule, RouterModule],
    exports: [
        InputTextComponent,
        ButtonComponent,
        InputSelectComponent,
        CheckboxComponent,
        PostCardComponent,
        LinkComponent,
        FilterToolbarComponent
    ]
})
export class MaterialModule {}

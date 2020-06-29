import { NgModule } from '@angular/core';
import { CompanyFormComponent } from './company-form.component';
import { ZipCodeDirective } from './zip-code.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CompanyFormComponent, ZipCodeDirective],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
    exports: [CompanyFormComponent]
})
export class CompanyFormModule {}

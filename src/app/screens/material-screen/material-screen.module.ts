import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MaterialScreenComponent } from './material-screen.component';

@NgModule({
    declarations: [MaterialScreenComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule]
})
export class MaterialScreenModule {}

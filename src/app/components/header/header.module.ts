import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RouterModule, MaterialModule, AngularSvgIconModule],
    exports: [HeaderComponent]
})
export class HeaderModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipasMainComponent } from './equipas-main.component';
import { routes } from './equipas-routing.module';

@NgModule({
    declarations: [
        EquipasMainComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
    ]
})
export class EquipasModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipasMainComponent } from './equipas-main.component';
import { routes } from './equipas-routing.module';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';

@NgModule({
    declarations: [
        EquipasMainComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        PostingResolver
    ]
})
export class EquipasModule {}

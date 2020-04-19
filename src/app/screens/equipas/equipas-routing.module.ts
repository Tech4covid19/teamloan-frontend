import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipasMainComponent } from './equipas-main.component';

export const routes: Routes = [
    {
        path: 'equipas',
        component: EquipasMainComponent,
        pathMatch: 'full',
        children: [
            {
                path: 'add',
                pathMatch: 'full',
                loadChildren: () => import('./add-equipa/add-equipa.module').then(m => m.AddEquipaModule),
            },
            {
                path: 'edit',
                pathMatch: 'full',
                loadChildren: () => import('./edit-equipa/edit-equipa.module').then(m => m.EditEquipaModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipasRoutingModule {}

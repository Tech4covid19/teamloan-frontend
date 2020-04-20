import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipasMainComponent } from './equipas-main.component';

export const routes: Routes = [
    {
        path: '',
        component: EquipasMainComponent,
        pathMatch: 'prefix',
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
            },
            {
                path: 'details',
                pathMatch: 'full',
                loadChildren: () => import('./readonly-equipa/readonly-equipa.module').then(m => m.ReadonlyEquipaModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipasRoutingModule {}

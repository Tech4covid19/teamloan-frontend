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
                loadChildren: () =>
                    import('./add-equipa/add-equipa.module').then(m => m.AddEquipaModule)
            },
            {
                path: ':id/edit',
                pathMatch: 'full',
                loadChildren: () =>
                    import('./edit-equipa/edit-equipa.module').then(m => m.EditEquipaModule)
            },
            {
                path: ':id/details',
                pathMatch: 'full',
                loadChildren: () =>
                    /* import('./readonly-equipa/readonly-equipa.module').then(m => m.ReadonlyEquipaModule) */
                    import('./detail-equipa/detail-equipa-screen.module').then(
                        m => m.DetailEquipaScreenModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EquipasRoutingModule {}
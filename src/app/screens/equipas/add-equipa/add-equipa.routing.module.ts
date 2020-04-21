import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { AddEquipaViewComponent } from './components/add-equipa-view/add-equipa-view.component';

const routes: Routes = [
    {
        path: '',
        component: AddEquipaViewComponent,
        pathMatch: 'full',
        data: {
            routes: [
                {
                    icon: {
                        url: '/assets/img/icons/edit-team.svg',
                        theme: LINK_ICON_SIZES.REGULAR
                    },
                    label: 'Editar',
                    url: '/my-posts/',
                    isMobile: false
                }
            ]
        },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AddEquipaRoutingModule {}

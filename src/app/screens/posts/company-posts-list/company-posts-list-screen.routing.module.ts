import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { CompanyPostsListScreenComponent } from 'src/app/screens/posts/company-posts-list/components/company-posts-list-screen.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyPostsListScreenComponent,
        pathMatch: 'full',
        data: {
            routes: [
                {
                    icon: {
                        url: '/assets/img/icons/add-team.svg',
                        theme: LINK_ICON_SIZES.REGULAR
                    },
                    label: 'Adicionar',
                    url: '/posts/private/add',
                    isMobile: false
                },
                {
                    icon: {
                        url: '/assets/img/icons/teams.svg',
                        theme: LINK_ICON_SIZES.REGULAR
                    },
                    label: 'Publicações',
                    url: '/posts',
                    isMobile: false
                }
            ]
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'add',
        pathMatch: 'full',
        loadChildren: () =>
            import('src/app/screens/posts/add-equipa/add-equipa.module').then(
                m => m.AddEquipaModule
            )
    },
    {
        path: ':id/edit',
        pathMatch: 'full',
        loadChildren: () =>
            import('src/app/screens/posts/edit-equipa/edit-equipa.module').then(
                m => m.EditEquipaModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class CompanyPostsListScreenRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { PostsListScreenComponent } from 'src/app/screens/posts/posts-list/components/posts-list-screen.component';

const routes: Routes = [
    {
        path: '',
        component: PostsListScreenComponent,
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
                    label: 'Minhas Equipas',
                    url: '/posts/private',
                    isMobile: false
                }
            ]
        },
        canActivate: [AuthGuard]
    },
    {
        path: ':id/details',
        pathMatch: 'full',
        loadChildren: () =>
            import('src/app/screens/posts/detail-equipa/detail-equipa-screen.module').then(
                m => m.DetailEquipaScreenModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class PostsListScreenRoutingModule {}

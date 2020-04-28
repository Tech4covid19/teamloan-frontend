import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('./posts-list/posts-list-screen.module').then(m => m.PostsListScreenModule)
    },
    {
        path: 'private',
        pathMatch: 'prefix',
        loadChildren: () =>
            import('./company-posts-list/company-posts-list-screen.module').then(
                m => m.CompanyPostsListScreenModule
            )
    },
    {
        path: ':id/details',
        pathMatch: 'full',
        loadChildren: () =>
            import('./detail-equipa/detail-equipa-screen.module').then(
                m => m.DetailEquipaScreenModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}

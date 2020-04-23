import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { ReadonlyEquipaViewComponent } from './components/add-equipa-view/readonly-equipa-view.component';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';

const routes: Routes = [
    {
        path: '',
        component: ReadonlyEquipaViewComponent,
        pathMatch: 'full',
        resolve: {
            posting: PostingResolver
        },
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
                        url: '/assets/img/icons/edit-team.svg',
                        theme: LINK_ICON_SIZES.REGULAR
                    },
                    label: 'Minhas Equipas',
                    url: '/posts/private/edit',
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
export class ReadonlyEquipaRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopGuard } from 'src/app/guards/develop.guard';
import { MaterialScreenComponent } from 'src/app/screens/material-screen/material-screen.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./screens/home-screen/home-screen.module').then(m => m.HomeScreenModule),
        pathMatch: 'full'
    },
    {
        path: 'material',
        component: MaterialScreenComponent,
        pathMatch: 'full',
        canActivate: [DevelopGuard]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [RouterModule],
    providers: [DevelopGuard]
})
export class AppRoutingModule {}

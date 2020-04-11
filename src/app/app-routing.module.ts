import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopGuard } from 'src/app/guards/develop.guard';
import { MaterialScreenComponent } from 'src/app/screens/material-screen/material-screen.component';
import { ConfirmationScreenComponent } from './screens/confirmation-screen/confirmation-screen.component';

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
        path: 'register',
        loadChildren: () =>
            import('./screens/register/register-screen.module').then(m => m.RegisterScreenModule),
        pathMatch: 'full',
    },
    {
        path: 'confirmation',
        component: ConfirmationScreenComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./screens/login-screen/login-screen.module').then(m => m.LoginViewModule),
        pathMatch: 'full'
    },
    {
        path: 'logout',
        loadChildren: () =>
            import('./screens/logout-screen/logout-screen.module').then(m => m.LogoutViewModule),
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
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

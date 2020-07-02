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
        path: 'register',
        loadChildren: () =>
            import('./screens/register/register-screen.module').then(m => m.RegisterScreenModule),
        pathMatch: 'full'
    },
    {
        path: 'confirmation',
        loadChildren: () =>
            import('./screens/confirmation-screen/confirmation-screen.module').then(
                m => m.ConfirmationScreenModule
            ),
        pathMatch: 'full'
    },
    {
        path: 'activation',
        loadChildren: () =>
            import('./screens/user-activation-screen/user-activation-screen.module').then(
                m => m.UserActivationScreenModule
            )
    },
    {
        path: 'posts',
        loadChildren: () => import('./screens/posts/posts.module').then(m => m.PostsModule),
        pathMatch: 'prefix'
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
        path: 'request-password',
        loadChildren: () =>
            import('./screens/request-password-screen/request-password-screen.module').then(
                m => m.RequestPasswordScreenModule
            ),
        pathMatch: 'full'
    },
    {
        path: 'reset-password',
        loadChildren: () =>
            import('./screens/reset-password-screen/reset-password-screen.module').then(
                m => m.ResetPasswordScreenModule
            )
    },
    { path: 'faqs', loadChildren: () => import('./screens/faqs/faqs.module').then(m => m.FaqsModule) },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule],
    providers: [DevelopGuard]
})
export class AppRoutingModule {}

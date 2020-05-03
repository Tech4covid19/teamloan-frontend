import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordViewComponent } from './reset-password-screen.component';

const routes: Routes = [
    {
        path: ':token',
        component: ResetPasswordViewComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResetPasswordScreenRoutingModule {}

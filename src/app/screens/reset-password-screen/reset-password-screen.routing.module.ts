import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordViewComponent } from './reset-password-screen.component';
import { GuestGuardService } from 'src/app/guards/guest.guard';

const routes: Routes = [
    {
        path: ':token',
        component: ResetPasswordViewComponent,
        pathMatch: 'full',
        canActivate: [GuestGuardService]
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordViewComponent } from 'src/app/screens/reset-password-screen/component/reset-password-screen.component';
import { GuestGuardService } from 'src/app/guards/guest.guard';

const routes: Routes = [
    {
        path: '',
        component: ResetPasswordViewComponent,
        pathMatch: 'full',
        canActivate: [GuestGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GuestGuardService]
})
export class ResetPasswordViewRoutingModule {}

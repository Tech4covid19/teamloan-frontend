import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from 'src/app/screens/login-screen/component/login-screen.component';
import { GuestGuardService } from 'src/app/guards/guest.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent,
        pathMatch: 'full',
        canActivate: [GuestGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GuestGuardService]
})
export class LoginViewRoutingModule {}

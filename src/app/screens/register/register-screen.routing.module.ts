import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuardService } from 'src/app/guards/guest.guard';
import { RegisterScreenComponent } from './register-screen.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterScreenComponent,
        pathMatch: 'full',
        canActivate: [GuestGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GuestGuardService]
})
export class RegisterScreenRoutingModule {}

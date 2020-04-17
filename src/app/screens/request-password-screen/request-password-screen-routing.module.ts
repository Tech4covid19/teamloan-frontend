import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestPasswordViewComponent } from 'src/app/screens/request-password-screen/component/request-password-screen.component';
import { GuestGuardService } from 'src/app/guards/guest.guard';

const routes: Routes = [
    {
        path: '',
        component: RequestPasswordViewComponent,
        pathMatch: 'full',
        canActivate: [GuestGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [GuestGuardService]
})
export class RequestPasswordViewRoutingModule {}

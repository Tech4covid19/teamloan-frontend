import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivationScreenComponent } from 'src/app/screens/user-activation-screen/user-activation-screen.component';

const routes: Routes = [
    {
        path: ':token',
        component: UserActivationScreenComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class UserActivationScreenRoutingModule {}

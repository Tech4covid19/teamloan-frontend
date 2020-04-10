import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from 'src/app/screens/home-screen/home-screen.component';
import { AuthGuardService } from 'src/app/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService],
})
export class HomeScreenRoutingModule {}

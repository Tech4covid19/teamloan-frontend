import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth.guard';
import { LogoutViewComponent } from 'src/app/screens/logout-screen/component/logout-screen.component';

const routes: Routes = [
    {
        path: '',
        component: LogoutViewComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class LogoutViewRoutingModule {}

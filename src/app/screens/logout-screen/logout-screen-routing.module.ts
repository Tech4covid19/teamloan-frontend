import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LogoutViewComponent } from 'src/app/screens/logout-screen/component/logout-screen.component';

const routes: Routes = [
    {
        path: '',
        component: LogoutViewComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class LogoutViewRoutingModule {}

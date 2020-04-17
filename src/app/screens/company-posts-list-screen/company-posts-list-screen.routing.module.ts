import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CompanyPostsListScreenComponent } from 'src/app/screens/company-posts-list-screen/components/company-posts-list-screen.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyPostsListScreenComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class CompanyPostsListScreenRoutingModule {}

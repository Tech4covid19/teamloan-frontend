import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PostsListScreenComponent } from 'src/app/screens/posts-list-screen/components/posts-list-screen.component';

const routes: Routes = [
    {
        path: '',
        component: PostsListScreenComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class PostsListScreenRoutingModule {}

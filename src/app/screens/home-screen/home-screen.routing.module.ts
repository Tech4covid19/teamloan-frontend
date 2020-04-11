import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from 'src/app/screens/home-screen/home-screen.component';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeScreenRoutingModule {}

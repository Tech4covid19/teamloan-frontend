import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipaViewComponent } from './components/add-equipa-view/add-equipa-view.component';

const routes: Routes = [
    {
        path: '',
        component: AddEquipaViewComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEquipaRoutingModule {}

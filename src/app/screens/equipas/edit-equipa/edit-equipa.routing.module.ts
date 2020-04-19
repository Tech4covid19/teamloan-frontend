import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEquipaViewComponent } from './components/add-equipa-view/edit-equipa-view.component';

const routes: Routes = [
    {
        path: '',
        component: EditEquipaViewComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditEquipaRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationScreenComponent } from './confirmation-screen.component';

const routes: Routes = [
    {
        path: '',
        component: ConfirmationScreenComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfirmationScreenRoutingModule {}

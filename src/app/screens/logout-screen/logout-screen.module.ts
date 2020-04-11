import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoutViewComponent } from 'src/app/screens/logout-screen/component/logout-screen.component';
import { LogoutViewRoutingModule } from 'src/app/screens/logout-screen/logout-screen-routing.module';

@NgModule({
    declarations: [LogoutViewComponent],
    imports: [CommonModule, LogoutViewRoutingModule],
    exports: [LogoutViewComponent]
})
export class LogoutViewModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginViewComponent } from 'src/app/screens/login-screen/component/login-screen.component';
import { LoginViewRoutingModule } from 'src/app/screens/login-screen/login-screen-routing.module';

@NgModule({
    declarations: [LoginViewComponent],
    imports: [CommonModule, LoginViewRoutingModule, ReactiveFormsModule, MaterialModule],
    exports: [LoginViewComponent]
})
export class LoginViewModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginViewComponent } from 'src/app/screens/login-screen/component/login-screen.component';
import { LoginViewRoutingModule } from 'src/app/screens/login-screen/login-screen-routing.module';
import { AuthFlowService } from 'src/app/services/auth/auth-flow.service';
import { AuthenticationStrategy } from 'src/app/services/auth/interfaces/authentication.strategy';

@NgModule({
    declarations: [LoginViewComponent],
    imports: [CommonModule, LoginViewRoutingModule, ReactiveFormsModule, MaterialModule],
    exports: [LoginViewComponent],
    providers: [
        {
            provide: AuthenticationStrategy,
            useClass: AuthFlowService
        }
    ]
})
export class LoginViewModule {}

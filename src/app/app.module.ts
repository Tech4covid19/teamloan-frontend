import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { MaterialScreenModule } from 'src/app/screens/material-screen/material-screen.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesNoticeComponentComponent } from './components/cookies-notice/cookies-notice.component';
import { ConfirmationScreenComponent } from './screens/confirmation-screen/confirmation-screen.component';

@NgModule({
    declarations: [AppComponent, CookiesNoticeComponentComponent, ConfirmationScreenComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        MaterialScreenModule,
        HeaderModule,
        FooterModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

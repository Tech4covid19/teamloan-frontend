import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { MaterialScreenModule } from 'src/app/screens/material-screen/material-screen.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesNoticeComponentComponent } from './components/cookies-notice/cookies-notice.component';
import { FooterComponentComponent } from './components/footer/footer.component';
import { FilterToolbarComponent } from './components/filter-toolbar/filter-toolbar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponentComponent,
        CookiesNoticeComponentComponent,
        FilterToolbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
        MaterialScreenModule,
        MaterialModule,
        ReactiveFormsModule
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

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesNoticeComponentComponent } from './components/cookies-notice/cookies-notice.component';
import { FooterComponentComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [AppComponent, FooterComponentComponent, CookiesNoticeComponentComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

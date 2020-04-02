import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeViewModule } from 'src/app/views/home-view/home-view.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesNoticeComponentComponent } from './components/cookies-notice-component/cookies-notice-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
    declarations: [AppComponent, FooterComponentComponent, CookiesNoticeComponentComponent],
    imports: [BrowserModule, AppRoutingModule, HomeViewModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

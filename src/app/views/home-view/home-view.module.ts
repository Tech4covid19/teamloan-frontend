import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProspectService } from 'src/app/services/prospect/prospect-service';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionIntroComponent } from './components/section-intro/section-intro.component';
import { SectionLenderComponent } from './components/section-lender/section-lender.component';
import { SectionPartnersComponent } from './components/section-partners/section-partners.component';
import { SectionSeekerComponent } from './components/section-seeker/section-seeker.component';
import { HomeViewComponent } from './home-view.component';

@NgModule({
    declarations: [
        HomeViewComponent,
        SectionIntroComponent,
        SectionAboutComponent,
        SectionLenderComponent,
        SectionSeekerComponent,
        SectionPartnersComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
    exports: [HomeViewComponent],
    providers: [ProspectService],
})
export class HomeViewModule {}

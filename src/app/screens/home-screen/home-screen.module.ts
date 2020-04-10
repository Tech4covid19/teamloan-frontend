import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeScreenRoutingModule } from 'src/app/screens/home-screen/home-screen.routing.module';
import { ProspectService } from 'src/app/services/prospect/prospect-service';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionIntroComponent } from './components/section-intro/section-intro.component';
import { SectionLenderComponent } from './components/section-lender/section-lender.component';
import { SectionPartnersComponent } from './components/section-partners/section-partners.component';
import { SectionSeekerComponent } from './components/section-seeker/section-seeker.component';
import { HomeScreenComponent } from './home-screen.component';

@NgModule({
    declarations: [
        HomeScreenComponent,
        SectionIntroComponent,
        SectionAboutComponent,
        SectionLenderComponent,
        SectionSeekerComponent,
        SectionPartnersComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomeScreenRoutingModule,
        MaterialModule
    ],
    providers: [ProspectService]
})
export class HomeScreenModule {}

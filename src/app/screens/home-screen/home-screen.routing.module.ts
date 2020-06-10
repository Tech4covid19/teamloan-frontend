import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { HomeScreenComponent } from 'src/app/screens/home-screen/components/home-screen.component';

const routes: Routes = [
    {
        path: '',
        component: HomeScreenComponent,
        pathMatch: 'full',
        data: {
            routes: [
                {
                    icon: {
                        url: '/assets/img/icons/linkedin.svg',
                        theme: LINK_ICON_SIZES.SMALL
                    },
                    url: 'https://www.linkedin.com/company/teamloan',
                    external: true,
                    isMobile: false
                },
                {
                    icon: {
                        url: '/assets/img/icons/instagram.svg',
                        theme: LINK_ICON_SIZES.SMALL
                    },
                    url: 'https://www.instagram.com/teamloan_/',
                    external: true,
                    isMobile: false
                },
                {
                    icon: {
                        url: '/assets/img/icons/facebook.svg',
                        theme: LINK_ICON_SIZES.SMALL
                    },
                    url: 'https://www.facebook.com/projecteamloan/',
                    external: true,
                    isMobile: false
                }
            ]
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeScreenRoutingModule {}

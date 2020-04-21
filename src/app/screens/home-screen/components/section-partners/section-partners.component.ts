import { Component } from '@angular/core';
import { THEME } from 'src/app/material/button/button.component';

@Component({
    selector: 'app-section-partners',
    templateUrl: './section-partners.component.html',
    styleUrls: ['./section-partners.component.scss']
})
export class SectionPartnersComponent {
    public buttonTheme = THEME.SECUNDARY;

    public partners = [
        {
            href: 'https://madeoflisboa.com',
            title: `Made of Lisboa | Official Lisbon's Entrepreneur Community`,
            src: '/assets/img/logos/cmlisboa.svg'
        },
        {
            href: 'http://www.acbraga.pt',
            title: 'Associação Comercial de Braga',
            src: '/assets/img/logos/acb.svg'
        },
        {
            href: 'https://www.nestportugal.pt',
            title: 'NEST - Centro de inovação do turismo',
            src: '/assets/img/logos/nest.svg'
        },
        {
            href: 'https://www.cap.pt/',
            title:
                'CAP - Confederação dos Agricultores de Portugal | Confederação dos Agricultores de Portugal',
            src: '/assets/img/logos/cap.svg'
        },
        {
            href: 'https://www.fipa.pt/',
            title: 'FIPA - Federação das Indústrias Portuguesas Agro-Alimentares',
            src: '/assets/img/logos/fipa.svg'
        },
        {
            href: 'http://www.guimaraesmarca.com/',
            title: 'Guimarães Marca',
            src: '/assets/img/logos/guimaraes-marca.svg'
        },
        {
            href: 'http://setupguimaraes.com/',
            title: 'Set.Up GuimarãesHome - Set.Up Guimarães',
            src: '/assets/img/logos/guimaraes-setup.svg'
        },
        {
            href: 'http://www.apotec.pt/',
            title: 'APOTEC',
            src: '/assets/img/logos/apotec.svg'
        }
    ];
}

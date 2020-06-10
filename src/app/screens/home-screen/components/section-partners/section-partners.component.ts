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
      href: 'http://www.apotec.pt/',
      title: 'APOTEC',
      src: '/assets/img/logos/apotec.svg'
    },
    {
      href: 'https://www.e-goi.com/',
      title: 'E-goi - Email Marketing e Marketing Automation para todos!',
      src: '/assets/img/logos/e-goi.svg'
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
      href: 'https://beta-i.com/',
      title: 'Beta-i | Collaborative Innovation',
      src: '/assets/img/logos/betai.svg'
    },
    {
      href: 'https://www.uc.pt/',
      title: 'Universidade de Coimbra',
      src: '/assets/img/logos/universidade-coimbra.svg'
    },
    {
      href: 'http://ucbusiness.uc.pt/',
      title: 'UC Business | Universidade de Coimbra',
      src: '/assets/img/logos/universidade-coimbra-business.svg'
    },
    {
      href: 'https://est.ipca.pt/',
      title: 'IPCA | Escola Superior de Tecnologia',
      src: '/assets/img/logos/ipca-est.svg'
    },
    {
      href: 'https://www.moneris.pt/',
      title: 'Moneris | Especialistas em contabilidade e apoio à gestão',
      src: '/assets/img/logos/moneris.svg'
    }
  ];

  public legalPartners = [
    {
      href: 'https://www.mlgts.pt/',
      title: 'Morais Leitão - Galvão Teles, Soares da Siva & Associados',
      src: '/assets/img/logos/morais-leitao.svg'
    }
  ];
}

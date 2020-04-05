import { Component } from '@angular/core';
import { THEME } from 'src/app/material/button/button.component';

@Component({
    selector: 'app-section-partners',
    templateUrl: './section-partners.component.html',
    styleUrls: ['./section-partners.component.scss'],
})
export class SectionPartnersComponent {
    public buttonTheme = THEME.SECUNDARY;
}

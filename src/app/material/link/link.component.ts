import { Component, Input } from '@angular/core';
import { LinkIconInterface } from 'src/app/material/link/link-icon.interface';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input()
    public label: string;

    @Input()
    public icon: LinkIconInterface;

    @Input()
    public url: string;

    @Input()
    public external = false;
}

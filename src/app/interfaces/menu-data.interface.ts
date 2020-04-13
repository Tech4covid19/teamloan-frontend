import { LinkIconInterface, LinkInterface } from 'src/app/material/link/link-icon.interface';

export interface MenuDataRoutesInterface extends LinkInterface {
    isMobile?: boolean;
}

export interface MenuDataInterface {
    routes: MenuDataRoutesInterface;
}

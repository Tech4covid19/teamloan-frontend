export const LINK_ICON_SIZES = {
    REGULAR: 'regular',
    SMALL: 'small'
};

export interface LinkIconInterface {
    url: string;
    theme: string;
}

export interface LinkInterface {
    url: string;
    label?: string;
    icon?: LinkIconInterface;
    external?: boolean;
}

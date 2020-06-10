import { InputSelectOption } from 'src/app/material/input-select/input-select.component';

export interface CompanyViewModel {
    name: string;
    nif: string;
    businessArea: string;
    intent: string;
    postalCode: string;
}

export interface BusinessArea {
    uuid: string;
    name: string;
}

export interface UserViewModel {
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterViewModel {
    company: CompanyViewModel;
    user: UserViewModel;
}

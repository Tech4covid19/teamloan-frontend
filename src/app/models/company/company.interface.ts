import { BusinessArea } from 'src/app/models/business-area/business-area';

export interface CompanyInterface {
    uuid?: string;
    name: string;
    email: string;
    vat: string;
    phone: string;
    'zip-code': string;
    'business-area'?: BusinessArea;
    password: string;
    intent: string;
    updatedAt?: string;
}

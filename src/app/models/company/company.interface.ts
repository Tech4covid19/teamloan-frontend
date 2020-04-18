import { BusinessArea } from 'src/app/models/business-area/business-area';

export interface CompanyInteface {
    uuid?: string;
    uuid_business_area: string;
    name: string;
    email: string;
    vat: string;
    phone: string;
    'zip-code': string;
    'business-area'?: BusinessArea;
    password: string;
    updatedAt?: string;
}

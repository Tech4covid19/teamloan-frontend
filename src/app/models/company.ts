export interface CompanyInteface {
    uuid_business_area: number;
    name: string;
    email: string;
    vat: number;
    phone: number;
    'zip-code': string;
    responsible: string;
    password: string;
}

export class Company {
    public static TYPE = 'company';

    public 'uuid_business_area': number;

    public name: string;

    public email: string;

    public vat: number;

    public phone: number;

    public 'zip-code': string;

    public responsible: string;

    public password: string;

    constructor(values?: CompanyInteface) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

export interface CompanyInterface {
    uuid_business_area: string;
    name: string;
    email: string;
    vat: string;
    phone: string;
    'zip-code': string;
    password: string;
    intent: string;
}

export class Company {
    public static TYPE = 'company';

    public 'uuid_business_area': string;

    public name: string;

    public email: string;

    public vat: string;

    public phone: string;

    public 'zip-code': string;

    public password: string;

    public intent: string;

    constructor(values?: CompanyInterface) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

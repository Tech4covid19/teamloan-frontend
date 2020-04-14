import { CompanyInteface } from 'src/app/models/company/company.interface';
import { BusinessArea } from 'src/app/models/business-area/business-area';

export class Company {
    public static TYPE = 'company';

    public 'uuid_business_area': string;

    public 'business-area': BusinessArea;

    public name: string;

    public email: string;

    public vat: string;

    public phone: string;

    public 'zip-code': string;

    public password: string;

    constructor(values?: CompanyInteface) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

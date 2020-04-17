import { ResourceInterface } from 'src/app/models/resource.interface';

export class District implements ResourceInterface {
    public static URL = 'addresses/districts';

    code: string;

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

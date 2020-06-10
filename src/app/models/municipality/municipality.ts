import { ResourceInterface } from 'src/app/models/resource.interface';

export class Municipality implements ResourceInterface {
    public static URL = 'municipalities';

    code: string;

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

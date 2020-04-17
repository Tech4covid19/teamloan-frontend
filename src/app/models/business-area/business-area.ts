export class BusinessArea {
    public static URL = 'business-area';

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

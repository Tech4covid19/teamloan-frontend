export class BusinessArea {
    public static TYPE = 'business-area';

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

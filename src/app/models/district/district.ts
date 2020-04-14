export class District {
    public static TYPE = 'district';

    code: string;

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

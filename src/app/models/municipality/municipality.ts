export class Municipality {
    public static TYPE = 'municipality';

    code: string;

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

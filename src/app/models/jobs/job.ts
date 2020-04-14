export class Job {
    public static TYPE = 'job';

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

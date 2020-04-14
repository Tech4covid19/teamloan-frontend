import { Job } from 'src/app/models/jobs/job';

export class Jobs {
    public static TYPE = 'jobs';

    createdAt: string;

    job: Job[];

    'number-of-people': string;

    status: string;

    updatedAt: string;

    updatedStatusAt: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

import { Job } from 'src/app/models/jobs/job';
import { ResourceInterface } from 'src/app/models/resource.interface';

export class Jobs implements ResourceInterface {
    public static URL = 'jobs';

    createdAt: string;

    job: Job[];

    'number-of-people': string;

    status: string;

    updatedAt: string;

    updatedStatusAt: string;

    uuid: string;

    name: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

import { Company } from 'src/app/models/company/company';
import { District } from 'src/app/models/district/district';
import { Jobs } from 'src/app/models/jobs/jobs';
import { Municipality } from 'src/app/models/municipality/municipality';

export class Posting {
    public static URL = 'postings';

    company: Company;

    createdAt: string;

    district: District;

    email: string;

    intent: string;

    jobs: Jobs[] = [];

    municipality: Municipality;

    phone: string;

    status: string;

    title: string;

    updatedAt: string;

    updatedStatusAt: string;

    uuid: string;

    notes: string;

    url: string;

    // infered property
    totalPeople: number;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

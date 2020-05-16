import { ResourceInterface } from '../resource.interface';

export class ClosePostReason implements ResourceInterface {
    // TODO: confirm with BE
    public static URL = 'close-post-reason';

    name: string;

    uuid: string;

    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}

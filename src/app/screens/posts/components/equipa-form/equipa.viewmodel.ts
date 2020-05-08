import { JobsViewModel } from '../jobs-form/jobs.viewmodel';

export interface EquipaViewModel {
    intent: string;
    distrito: string;
    concelho: string;
    nome: string;
    jobsData: JobsViewModel;
    obs: string;
}

import { JobsViewModel } from '../jobs-form/jobs.viewmodel';

export interface EquipaViewModel {
    distrito: string;
    concelho: string;
    nome: string;
    jobsData: JobsViewModel;
    obs: string;
}

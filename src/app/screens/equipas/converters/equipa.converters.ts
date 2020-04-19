import { EquipaViewModel } from '../components/equipa-form/equipa.viewmodel';
import { Posting } from 'src/app/models/posting/posting';
import { District } from 'src/app/models/district/district';
import { Municipality } from 'src/app/models/municipality/municipality';
import { INTENT } from 'src/app/models/intent.enum';
import { Jobs } from 'src/app/models/jobs/jobs';
import { Job } from 'src/app/models/jobs/job';

export class EquipaConverters {

    public static equipaViewModelToPosting(equipaViewModel: EquipaViewModel): Posting {
        const posting = new Posting({
            title: equipaViewModel.nome,
            district: new District({
                // name: '',
                uuid: equipaViewModel.distrito
            }),
            municipality: new Municipality({
                uuid: equipaViewModel.concelho
            }),
            intent: INTENT.LEND,
            jobs: equipaViewModel.jobsData.jobs
            .filter(j => j.job && j.quantity)
            .map(j => {
                return new Jobs({
                    job: new Job({
                        // name: '',
                        uuid: j.job
                    }),
                    'number-of-people': j.quantity,
                });
            })
        });
        return posting;
    }
}
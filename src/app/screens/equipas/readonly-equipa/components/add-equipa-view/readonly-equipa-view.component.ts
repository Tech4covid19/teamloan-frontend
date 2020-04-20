import { Component } from '@angular/core';

@Component({
    selector: 'app-readonly-equipa-view',
    templateUrl: './readonly-equipa-view.component.html',
    styleUrls: ['./readonly-equipa-view.component.scss']
})
export class ReadonlyEquipaViewComponent {

    public initialValue = {
        distrito: '1db42e06-4f0d-b121-a428-f81d8ed40fba', // aveiro
        concelho: '58afc4d6-32ab-47c0-b659-5647fb3a437b', // anadia
        nome: 'teste nome',
        jobsData: { jobs: [
            { job: 'b200e7be-0c3b-4502-8d7e-e461e7fdb452', quantity: 1, last: false },
            { job: '9567032c-78b3-407b-b162-8ce9ee09fdf3', quantity: 2, last: true }
        ] },
        obs: 'dsdas'
    };

    constructor() {
    }

}

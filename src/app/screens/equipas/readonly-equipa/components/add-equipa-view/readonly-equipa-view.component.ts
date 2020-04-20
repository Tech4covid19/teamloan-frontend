import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipaViewModel } from '../../../components/equipa-form/equipa.viewmodel';
import { EquipaConverters } from '../../../converters/equipa.converters';

@Component({
    selector: 'app-readonly-equipa-view',
    templateUrl: './readonly-equipa-view.component.html',
    styleUrls: ['./readonly-equipa-view.component.scss']
})
export class ReadonlyEquipaViewComponent {

    public initialValue: EquipaViewModel = null;

    constructor(private activatedRoute: ActivatedRoute) {
        const posting = this.activatedRoute.snapshot.data.posting;
        this.initialValue = EquipaConverters.postingToEquipaViewModel(posting);
    }

}

import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { Posting } from 'src/app/models/posting/posting';
import { INTENT } from 'src/app/models/intent.enum';
import { ResourceInterface } from 'src/app/models/resource.interface';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';
import { DistrictService } from 'src/app/services/district/district.service';
import { JobsService } from 'src/app/services/jobs/jobs.service';
import { MunicipalityService } from 'src/app/services/municipality/municipality.service';
import {
    QueryFilterInterface,
    QUERY_FILTER_PARAMETERS
} from 'src/app/services/posting/query-filter';

export abstract class AbstractPostsList implements OnDestroy {
    public posts: Posting[] = [];

    public businessAreaOptions$: Observable<InputSelectOption[]> = new Observable();

    public districtOptions$: Observable<InputSelectOption[]> = new Observable();

    public municipalityOptions$: Observable<InputSelectOption[]> = new Observable();

    public jobsOptions$: Observable<InputSelectOption[]> = new Observable();

    private _subject$ = new Subject();

    private _currentFilters: QueryFilterInterface = {};

    constructor(
        private postsListFilterService: PostsListFilterService,
        private postsListService: AbsctractPostsListService,
        private businessAreaService: BusinessAreasService,
        private districtService: DistrictService,
        private municipalityService: MunicipalityService,
        private jobsService: JobsService
    ) {
        this._fetchBusinessArea();
        this._fetchDistrict();
        this._fetchJobs();
        this._onFilterAction({
            [QUERY_FILTER_PARAMETERS.INTENT]: INTENT.LEND
        });
        this.postsListFilterService
            .onFilter()
            .pipe(takeUntil(this._subject$))
            .subscribe(filter => this._onFilterAction(filter));
    }

    ngOnDestroy() {
        this._subject$.next();
        this._subject$.complete();
    }

    private _fetchBusinessArea() {
        this.businessAreaOptions$ = this.businessAreaService
            .get()
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _fetchDistrict() {
        this.districtOptions$ = this.districtService
            .get()
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _fetchMunicipalities(districtId: string) {
        this.municipalityOptions$ = this.municipalityService
            .get(districtId)
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _fetchJobs() {
        this.jobsOptions$ = this.jobsService
            .get()
            .pipe(map(items => this._getInputSelectOptions(items)));
    }

    private _getInputSelectOptions(businessAreas: ResourceInterface[]): InputSelectOption[] {
        return businessAreas.map(item => ({
            key: item.uuid,
            label: item.name
        }));
    }

    private _onFilterAction(filters: QueryFilterInterface) {
        if (
            filters[QUERY_FILTER_PARAMETERS.DISTRICT] &&
            filters[QUERY_FILTER_PARAMETERS.DISTRICT] !==
                this._currentFilters[QUERY_FILTER_PARAMETERS.DISTRICT]
        ) {
            this._fetchMunicipalities(filters[QUERY_FILTER_PARAMETERS.DISTRICT]);
        }
        this._currentFilters = filters;
        this.postsListService.getPosting(filters).subscribe(
            posts => this._onPostingResponse(posts),
            error => this._onPostingResponse(null, error)
        );
    }

    private _onPostingResponse(posts: Posting[], _error?: any) {
        this.posts = posts ? posts : [];
    }
}

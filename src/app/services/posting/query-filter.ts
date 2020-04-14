import { HttpParams } from '@angular/common/http';

const PAGE_NUMBER = 1;

const PAGE_SIZE = 10;

export const QUERY_FILTER_PARAMETERS = {
    PAGE_NUMBER: 'page-number',
    PAGE_SIZE: 'page-size',
    INTENT: 'intent',
    DISTRICT: 'district',
    BUSINESS_AREA: 'business-area',
    MUNICIPALITY: 'municipality'
};

export interface QueryFilterInterface {
    'page-number'?: number;
    'page-size'?: number;
    intent?: string;
    district?: string;
    'business-area'?: string;
    municipality?: string;
}

export class QueryFilter {
    public pageNumber = PAGE_NUMBER;

    public pageSize = PAGE_SIZE;

    public intent = '';

    public district = '';

    public businessArea = '';

    public municipality = '';

    constructor(parameters?: QueryFilterInterface) {
        if (parameters) {
            Object.assign(this, parameters);
        }
    }

    public getHttParams(): HttpParams {
        return new HttpParams()
            .append(QUERY_FILTER_PARAMETERS.PAGE_NUMBER, this.pageNumber.toString())
            .append(QUERY_FILTER_PARAMETERS.PAGE_SIZE, this.pageSize.toString())
            .append(QUERY_FILTER_PARAMETERS.INTENT, this.intent)
            .append(QUERY_FILTER_PARAMETERS.DISTRICT, this.district)
            .append(QUERY_FILTER_PARAMETERS.BUSINESS_AREA, this.businessArea)
            .append(QUERY_FILTER_PARAMETERS.MUNICIPALITY, this.municipality);
    }
}

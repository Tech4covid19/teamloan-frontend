import { HttpParams } from '@angular/common/http';
import { INTENT } from 'src/app/models/intent.enum';

const PAGE_NUMBER = 1;

const PAGE_SIZE = 10;

export enum QUERY_FILTER_PARAMETERS {
    PAGE_NUMBER = 'page-number',
    PAGE_SIZE = 'page-size',
    INTENT = 'intent',
    DISTRICT = 'district',
    BUSINESS_AREA = 'business-area',
    JOB = 'job',
    MUNICIPALITY = 'municipality'
}

export interface QueryFilterInterface {
    'page-number'?: number;
    'page-size'?: number;
    intent?: INTENT;
    district?: string;
    'business-area'?: string;
    job?: string;
    municipality?: string;
}

export class QueryFilter {
    public static getHttParams(parameters: QueryFilterInterface): HttpParams {
        return new HttpParams()
            .append(
                QUERY_FILTER_PARAMETERS.PAGE_NUMBER,
                (parameters[QUERY_FILTER_PARAMETERS.PAGE_NUMBER]
                    ? parameters[QUERY_FILTER_PARAMETERS.PAGE_NUMBER]
                    : PAGE_NUMBER
                ).toString()
            )
            .append(
                QUERY_FILTER_PARAMETERS.PAGE_SIZE,
                (parameters[QUERY_FILTER_PARAMETERS.PAGE_SIZE]
                    ? parameters[QUERY_FILTER_PARAMETERS.PAGE_SIZE]
                    : PAGE_SIZE
                ).toString()
            )
            .append(
                QUERY_FILTER_PARAMETERS.INTENT,
                parameters[QUERY_FILTER_PARAMETERS.INTENT]
                    ? parameters[QUERY_FILTER_PARAMETERS.INTENT]
                    : ''
            )
            .append(
                QUERY_FILTER_PARAMETERS.DISTRICT,
                parameters[QUERY_FILTER_PARAMETERS.DISTRICT]
                    ? parameters[QUERY_FILTER_PARAMETERS.DISTRICT]
                    : ''
            )
            .append(
                QUERY_FILTER_PARAMETERS.BUSINESS_AREA,
                parameters[QUERY_FILTER_PARAMETERS.BUSINESS_AREA]
                    ? parameters[QUERY_FILTER_PARAMETERS.BUSINESS_AREA]
                    : ''
            )
            .append(
                QUERY_FILTER_PARAMETERS.MUNICIPALITY,
                parameters[QUERY_FILTER_PARAMETERS.MUNICIPALITY]
                    ? parameters[QUERY_FILTER_PARAMETERS.MUNICIPALITY]
                    : ''
            );
    }
}

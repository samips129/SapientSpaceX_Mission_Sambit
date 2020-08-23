import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FilterService {
    endPoint: any;
    payLoad: any;

    constructor(private http: HttpClient) {

    }

    getMissionData(): Observable<any> {
        this.endPoint = 'https://api.spaceXdata.com/v3/launches?limit=15';
        return this.http.get(this.endPoint);
    }

    getFilteredData(reqObj: any): Observable<any> {
        this.endPoint = 'https://api.spaceXdata.com/v3/launches?limit=15';
        let { isLandingSuccessful, isLaunchSuccessful, yearVal } = reqObj;
        if (isLaunchSuccessful !== undefined) {
            this.endPoint = this.endPoint + '&launch_success=' + isLaunchSuccessful;
        }
        if (isLandingSuccessful !== undefined) {
            this.endPoint = this.endPoint + '&land_success=' + isLandingSuccessful;
        }
        if (yearVal !== undefined) {
            this.endPoint = this.endPoint + '&launch_year=' + yearVal;
        }
        return this.http.get(this.endPoint);
    }

}
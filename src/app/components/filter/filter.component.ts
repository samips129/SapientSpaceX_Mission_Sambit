import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  launchYears: any;
  reqObj: any = {};
  @Output() emitFilterData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.launchYears = ['2020', '2019', '2018', '2017', '2016'];
  }

  setLaunchYear(val: any) {
    this.reqObj.yearVal = val;
    this.emitFilterData.emit(this.reqObj);
  }

  getLaunchDetails(val: boolean) {
    this.reqObj.isLaunchSuccessful = val;
    this.emitFilterData.emit(this.reqObj);
  }

  getLandingDetails(val: boolean) {
    this.reqObj.isLandingSuccessful = val;
    this.emitFilterData.emit(this.reqObj);
  }
}

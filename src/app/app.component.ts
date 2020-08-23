import { Component, OnInit } from '@angular/core';

import { FilterService } from './service/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spaceX application';
  devloperName: string = 'Sambit Dash';
  filterData: any;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.getMissionData().subscribe(
      res => this.filterData = res);
  }

  setFilterData(data: any) {
    this.filterService.getFilteredData(data).subscribe(
      res => this.filterData = res);
  }
}

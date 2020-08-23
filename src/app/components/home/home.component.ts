import { Component, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { FilterService } from './../../service/filter.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() initialMissionList: any;

  constructor(private filterService: FilterService) { }


  ngOnInit() {

  }

}

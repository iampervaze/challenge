import { Component, OnInit, EventEmitter } from '@angular/core';
import {
  SearchCriteria,
  PlainTextSearchCriteria,
  NumberRangeSearchCriteria,
  DateRangeSearchCriteria
} from '@app/components/advanced-search/model';

@Component({
  selector: 'app-ks',
  templateUrl: './ks.component.html',
  styleUrls: ['./ks.component.scss']
})
export class KsComponent implements OnInit {
  constructor() {}

  criterias: SearchCriteria[] = [
    new PlainTextSearchCriteria('quoteId', 'Quote ID'),
    new NumberRangeSearchCriteria('estimate', 'Estimate'),
    new DateRangeSearchCriteria('creationDate', 'Creation Date')
  ];
  ngOnInit(): void {}

  search(event) {
    console.log(event);
  }
}

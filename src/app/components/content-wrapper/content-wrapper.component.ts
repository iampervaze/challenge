import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  @Input() header = '';
  @Input() fluid: boolean = false;
  constructor() {}

  ngOnInit() {}
}

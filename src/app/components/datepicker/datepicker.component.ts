import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '@app/core';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [MakeProvider(DatepickerComponent)]
})
export class DatepickerComponent extends AbstractValueAccessor implements OnInit {
  @Input() placeholder: string = 'yyyy-mm-dd';
  constructor() {
    super();
  }

  ngOnInit(): void {}
}

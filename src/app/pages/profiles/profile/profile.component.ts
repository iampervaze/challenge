import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profile: any ={}
  constructor() { }

  ngOnInit(): void {
  }

}

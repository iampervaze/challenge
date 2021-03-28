import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<content-wrapper [header]="'Home'">Welcome to the Angular Template!</content-wrapper>`
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

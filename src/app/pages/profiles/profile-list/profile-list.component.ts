import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  profiles$: Observable<any[]>;
  constructor(private profileSvc: ProfileService) {}

  ngOnInit() {
    this.profiles$ = this.profileSvc.get();
  }
}

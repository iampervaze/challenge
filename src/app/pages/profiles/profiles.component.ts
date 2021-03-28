import { Component} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
profiles$: Observable<any[]>;

  constructor() {}

}
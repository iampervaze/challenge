import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Subscription } from 'rxjs';
import { environment } from '@environment/environment';
const redirectUri = `${window.location.origin}/logged_out`;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public auth: AuthService) {}

  async logout() {
    //const idToken = await this.okta.getIdToken();
    // Clear local session
    // this.okta.logout('/logged_out').then(result => {
    //   let loc = `${environment.okta.issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
    //   window.location.href = loc;
    // });
  }
}

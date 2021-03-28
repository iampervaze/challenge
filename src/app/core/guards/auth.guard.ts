import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService,
    injector: Injector) {
   // super(okta, injector);
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    state.url = '';
    // if (!(await super.canActivate(next, state))) {
    //   return false;
    // }

    // try {
    //   const hasAccess = await this.auth.checkAccess();
    //   if (!hasAccess) throw new Error('access denied');
    //   return true;
    // } catch (error) {
    //   this.router.navigateByUrl('/accessdenied');
    // }
    // return false;

    return true;
  }
}

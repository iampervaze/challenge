import { Injectable } from '@angular/core';
import { User } from '@app/models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  public $hasAdminAccess: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public $userInfo: BehaviorSubject<User> = new BehaviorSubject(new User());
  user: User;
  async isAuthenticated() {
    return true
  }

  async checkAccess(): Promise<boolean> {
    // try {
    //   const user = await this.userSvc.getCurrentUser();
    //   this.$hasAdminAccess.next(user.isAdmin);
    //   this.$userInfo.next(user);
    //   return user.isAdmin;
    // } catch (error) {
    //   console.log('User.init error occured', error);
    //   this.$hasAdminAccess.next(false);
    //   this.$userInfo.next(new User());
    // }
    return true;
  }
}

import { Injectable }     from '@angular/core';
import {ActivatedRoute, CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import IAuthInfo from "./share/IAuthInfo";
import {rrService} from "./rr-service.service";

@Injectable()
export class AuthGuard implements CanActivate {
  private authInfo: IAuthInfo = { isAuth: false , userId: -1 };

  canActivate() {
    //Your redirect logic/condition. I use this.
    if (!this.authInfo.isAuth) {
      this.router.navigate(['auth/login']);
    }
    console.log('AuthGuard#canActivate called');
    return true;
  }


  //Constructor
  constructor(private router: Router, service: rrService) {
    service.getAuthStatus()
      .subscribe(
        result => this.authInfo = result,
        () => { console.log('GET getAuthStatus call ERROR'); this.authInfo.isAuth = false},
        () => {
          console.log('GET getAuthStatus call OK, isAuth:' + this.authInfo.isAuth);
        }
      );

  }

}

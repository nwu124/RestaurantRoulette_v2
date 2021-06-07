import { Component } from '@angular/core';
import IAuthInfo from "./share/IAuthInfo";
import {ActivatedRoute} from "@angular/router";
import {rrService} from "./rr-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private authInfo: IAuthInfo = { isAuth: false, userId: -1};

  constructor(service: rrService) {
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

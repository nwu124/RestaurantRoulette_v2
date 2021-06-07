import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {rrService} from "../rr-service.service";
import IAuthInfo from '../share/IAuthInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private authInfo: IAuthInfo = { isAuth: false , userId: -1};

  constructor(private route: ActivatedRoute, service: rrService) {
    service.getAuthStatus()
      .subscribe(
        result => this.authInfo = result,
        () => { console.log('GET getAuthStatus call ERROR'); this.authInfo.isAuth = false},
        () => {
          console.log('GET getAuthStatus call OK, isAuth:' + this.authInfo.isAuth);
        }
      );
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rrService} from '../rr-service.service';
import IUserModelAngular from '../share/IUserModelAngular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: IUserModelAngular;
  private userId: number;
  private username: string;
  private password: string;
  private loginStatus: number;
  private lastLogin: string;

  constructor(private route: ActivatedRoute, service: rrService) {
    this.userId = route.snapshot.params['id'];
    service.getUserById(this.userId.toString())
      .subscribe(
        result => this.user = result,
        () => {console.log('GET User call ERROR'); },
        () => {
          console.log('GET User call OK User Id:' + this.userId);
          this.username = this.user.username;
          this.password = this.user.password;
          this.loginStatus = this.user.loginStatus;
          this.lastLogin = this.user.lastLogin;
        }
      );
  }

  ngOnInit() {
  }

}

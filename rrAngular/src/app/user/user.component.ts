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
  private loginType: string;
  private firstname: string;
  private lastname: string;
  private email: string;
  private photoUrl: string;
  private lastLogin: string;

  constructor(private route: ActivatedRoute, service: rrService) {
    this.userId = route.snapshot.params['id'];
    service.getUserById(this.userId.toString())
      .subscribe(
        result => this.user = result,
        () => {console.log('GET User call ERROR'); },
        () => {
          console.log('GET User call OK User Id:' + this.userId);
          this.userId = this.user.userId;
          this.loginType = this.user.loginType;
          this.firstname = this.user.firstname;
          this.lastname = this.user.lastname;
          this.email = this.user.email;
          this.photoUrl = this.user.photoUrl;
          this.lastLogin = this.user.lastLogin;
        }
      );
  }

  ngOnInit() {
  }

}

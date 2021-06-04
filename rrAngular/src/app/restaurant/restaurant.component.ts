import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rrService} from '../rr-service.service';
import IRestaurantModelAngular from '../share/IRestaurantModelAngular';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurantList: IRestaurantModelAngular;
  private restaurantId: number;
  private locationCity: string;
  private locationState: string;
  private locationZip: string;
  private name: string;
  private price: string;
  private url: string;
  private tags: [string];
  private reviews: [{ source: string; description: string; rating: number }];
  private feedback: [{ userID: number; comment: string; rating: number }];

  constructor(private route: ActivatedRoute, service: rrService) {
    this.restaurantId = route.snapshot.params['id'];

    service.getRestaurantById(this.restaurantId.toString())
      .subscribe(
        result => this.restaurantList = result,
        () => { console.log('GET Restaurant call ERROR'); },
        () => {
          console.log('GET Restaurant call OK RestaurantID:' + this.restaurantList.restaurantId);
          this.locationCity = this.restaurantList.locationCity;
          this.feedback = this.restaurantList.feedback;
          this.locationState = this.restaurantList.locationState;
          this.locationZip = this.restaurantList.locationZip;
          this.name = this.restaurantList.name;
          this.price = this.restaurantList.price;
          this.restaurantId = this.restaurantList.restaurantId;
          this.reviews = this.restaurantList.reviews;
          this.tags = this.restaurantList.tags;
          this.url = this.restaurantList.url;
        }
      );
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {rrService} from '../rr-service.service';
import IRestaurantModelAngular from '../share/IRestaurantModelAngular';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  private myService: rrService;
  private restaurantList: IRestaurantModelAngular[];
  private restaurantIdDispName: string;
  private restaurantIdDispId: number;

  zipResponse: any;
  latDisp: any;
  longDisp: any;

  constructor(public service: rrService) {
    this.myService = service;
    console.log("Service " + this.myService);
    this.myService.getAllRestaurants()
      .subscribe(
        result => this.restaurantList = result,
        () => {
          console.log('GET RestaurantList call ERROR');
        },
        () => {
          console.log('GET RestaurantList call OK, first id: ' + this.restaurantList[0].restaurantId);
        }
      );
  }

  pickRestaurant() {
    let randomIndex = Math.floor((Math.random() * this.restaurantList.length));
    let selectedRestaurant = this.restaurantList[randomIndex];
    this.restaurantIdDispName = selectedRestaurant.name;
    this.restaurantIdDispId = selectedRestaurant.restaurantId;
    // alert("Your restaurant is " + selectedRestaurant.name + " with ID " + selectedRestaurant.restaurantId);
    this.findZipCode();
  }


  findZipCode(): void {
    if (navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(function (pos) {
        console.log(pos);

        console.log("Service " + this.myService);
        this.service.getAllRestaurants()
          .subscribe(
            result => this.restaurantList = result,
            () => {
              console.log('GET RestaurantList call ERROR');
            },
            () => {
              console.log('GET RestaurantList call OK, first id: ' + this.restaurantList[0].restaurantId);
            }
          );

        // this.rrService.callGMapsGeocode(pos.coords.latitude, pos.coords.longitude)
        //   .subscribe(
        //     result => this.zipResponse = result,
        //     () => {
        //       console.log('GET Google Maps API zipcode call ERROR');
        //     },
        //     () => {
        //       console.log('GET Google Maps API zipcode call OK, first id: ' + this.zipResponse);
        //     }
        //   );
      })
    } else {
      console.log("No support for geolocation")
    }
  }

  ngOnInit() {
  }

}

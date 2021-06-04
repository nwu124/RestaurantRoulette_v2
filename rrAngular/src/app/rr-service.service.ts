import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import ISavedListModelAngular from "./share/ISavedListModelAngular";

@Injectable()
export class rrService {

  constructor(private http: Http) {
  }

  localPort: number = 8080;
  expressHost: string = 'localhost';
  gMapsApiURL: string = 'http://maps.googleapis.com/maps/api/geocode/json';

  /**
   * Prepend URL with localhost if not on Azure
   */
  getPrepend() {
    let hostname: string = window.location.hostname;
    if (hostname.includes('azure')) {
      return "";
    }
    //Assume running locally mongoose server uses local port
    return "http://" + this.expressHost + ":" + this.localPort;
  }

  getAllSavedLists() {
    return this.http.get(this.getPrepend() + '/app/savedlist')
      .map(response => response.json());
  }

  getSavedListById(index: string) {
    return this.http.get(this.getPrepend() + '/app/savedlist/' + index)
      .map(response => response.json());
  }

  getRestaurantById(index: string) {
    return this.http.get(this.getPrepend() + '/app/restaurant/' + index)
      .map(response => response.json());
  }

  getAllRestaurants() {
    return this.http.get(this.getPrepend() + '/app/restaurant/')
      .map(response => response.json());
  }

  getAllUsers() {
    return this.http.get(this.getPrepend() + '/app/user')
      .map(response => response.json());
  }

  getUserById(index: string) {
    return this.http.get(this.getPrepend() + '/app/user/' + index)
      .map(response => response.json());
  }

  saveSavedList(index: string, savedList: ISavedListModelAngular) {
    return this.http.put(this.getPrepend() + '/app/savedlist/' + index, savedList)
      .map(response => response.json());
  }

  callGMapsGeocode(lat: number, long: number) {
    return this.http.get(this.gMapsApiURL + '?latlng=' + lat + ',' + long + '&sensor=true')
      .map(response => response.json());
  }

}

import {Component, OnInit} from '@angular/core';
import ISavedListModelAngular from '../share/ISavedListModelAngular';
import {rrService} from '../rr-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-savedlist',
  templateUrl: './savedlist.component.html',
  styleUrls: ['./savedlist.component.css']
})
export class SavedlistComponent implements OnInit {
  savedList: ISavedListModelAngular;
  blocked: [{ restaurantId: number }];
  favorites: [{ restaurantId: number }];
  history: [{ restaurantId: number }];
  private userId: string;
  localService: rrService;

  constructor(private route: ActivatedRoute, service: rrService) {
    this.userId = route.snapshot.params['id'];
    this.localService = service;

    service.getSavedListById(this.userId)
      .subscribe(
        result => this.savedList = result,
        () => {
          console.log('GET SavedList call ERROR');
        },
        () => {
          console.log('GET SavedList call OK User Id:' + this.savedList.userId);
          this.blocked = this.savedList.blocked;
          this.favorites = this.savedList.favorites;
          this.history = this.savedList.history;
        }
      );
  }

  addFavorite() {
    var newFavorite = (document.getElementById("favoriteInput") as HTMLInputElement).value;
    this.savedList.favorites.push({restaurantId: +newFavorite});
    this.localService.saveSavedList(this.userId, this.savedList)
      .subscribe(
        result => this.savedList = result,
        () => {
          console.log('PUT SavedList call ERROR');
        },
        () => {
          console.log('PUT SavedList call OK User Id:' + this.savedList.userId);
          this.blocked = this.savedList.blocked;
          this.favorites = this.savedList.favorites;
          this.history = this.savedList.history;
        }
      );
  }

  removeFavorite() {
    var removeFavorite = (document.getElementById("favoriteInput") as HTMLInputElement).value;
    const index: number = this.savedList.favorites.findIndex(obj => obj.restaurantId == +removeFavorite);
    if (index !== -1) {
      this.savedList.favorites.splice(index, 1);
    }
    this.localService.saveSavedList(this.userId, this.savedList)
      .subscribe(
        result => this.savedList = result,
        () => {
          console.log('PUT SavedList call ERROR');
        },
        () => {
          console.log('PUT SavedList call OK User Id:' + this.savedList.userId);
          this.blocked = this.savedList.blocked;
          this.favorites = this.savedList.favorites;
          this.history = this.savedList.history;
        }
      );
  }

  addBlocked() {
    var newBlocked = (document.getElementById("blockedInput") as HTMLInputElement).value;
    this.savedList.blocked.push({restaurantId: +newBlocked});

    this.localService.saveSavedList(this.userId, this.savedList)
      .subscribe(
        result => this.savedList = result,
        () => {
          console.log('PUT SavedList call ERROR');
        },
        () => {
          console.log('PUT SavedList call OK User Id:' + this.savedList.userId);
          this.blocked = this.savedList.blocked;
          this.favorites = this.savedList.favorites;
          this.history = this.savedList.history;
        }
      );
  }

  removeBlocked() {
    var removeBlocked = (document.getElementById("blockedInput") as HTMLInputElement).value;
    const index: number = this.savedList.blocked.findIndex(obj => obj.restaurantId == +removeBlocked);
    if (index !== -1) {
      this.savedList.blocked.splice(index, 1);
    }
    this.localService.saveSavedList(this.userId, this.savedList)
      .subscribe(
        result => this.savedList = result,
        () => {
          console.log('PUT SavedList call ERROR');
        },
        () => {
          console.log('PUT SavedList call OK User Id:' + this.savedList.userId);
          this.blocked = this.savedList.blocked;
          this.favorites = this.savedList.favorites;
          this.history = this.savedList.history;
        }
      );
  }

  ngOnInit() {
  }

}

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
  serviceVariable: rrService;

  constructor(private route: ActivatedRoute, service: rrService) {
    this.userId = route.snapshot.params['id'];

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

  updateSavedList() {
    this.savedList.favorites.push({restaurantId: 99999});

    this.serviceVariable.saveSavedList(this.userId, this.savedList)
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

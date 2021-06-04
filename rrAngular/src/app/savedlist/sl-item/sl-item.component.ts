import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sl-item',
  templateUrl: './sl-item.component.html'
})
export class SlItemComponent implements OnInit {
  @Input('headingName') headingName: string;
  @Input('inputList') inputList: [{ restaurantId: number }];

  constructor() { }

  ngOnInit() {
  }

}

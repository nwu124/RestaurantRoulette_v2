import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedlistComponent } from './savedlist.component';

describe('SavedlistComponent', () => {
  let component: SavedlistComponent;
  let fixture: ComponentFixture<SavedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

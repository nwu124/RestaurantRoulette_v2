import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {APP_BASE_HREF} from '@angular/common';
import {routing} from './app.routing';
import {rrService} from 'app/rr-service.service';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {UserComponent} from './user/user.component';
import {SavedlistComponent} from './savedlist/savedlist.component';
import {SlItemComponent} from './savedlist/sl-item/sl-item.component';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./AuthGuard";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchBarComponent,
    RestaurantComponent,
    UserComponent,
    SavedlistComponent,
    SlItemComponent,
    RestaurantListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, rrService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }

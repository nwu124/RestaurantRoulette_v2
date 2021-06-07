import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UserComponent } from './user/user.component';
import {SavedlistComponent} from './savedlist/savedlist.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./AuthGuard";

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'app/restaurant/:id', component: RestaurantComponent, canActivate: [AuthGuard]},
    { path: 'app/restaurant', component: RestaurantListComponent, canActivate: [AuthGuard]},
    { path: 'app/protected/user/:id', component: UserComponent, canActivate: [AuthGuard]},
    { path: 'app/protected/savedlist/:id', component: SavedlistComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(routes, {useHash: true});

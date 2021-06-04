import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UserComponent } from './user/user.component';
import {SavedlistComponent} from './savedlist/savedlist.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'restaurant/:id', component: RestaurantComponent},
    { path: 'restaurant', component: RestaurantListComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'savedlist/:id', component: SavedlistComponent}
];

export const routing = RouterModule.forRoot(routes, {useHash: true});

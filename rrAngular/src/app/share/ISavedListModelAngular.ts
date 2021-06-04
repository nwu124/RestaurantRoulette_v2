interface ISavedListModelAngular {
  userId: number;
  favorites: [ {
    restaurantId: number;
  }];
  blocked: [ {
    restaurantId: number;
  }];
  history: [ {
    restaurantId: number;
  }];
}
export default ISavedListModelAngular;

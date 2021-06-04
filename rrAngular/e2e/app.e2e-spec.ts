import { RestaurantRouletteAppPage } from './app.po';

describe('Restaurant-Roulette-app App', function() {
  let page: RestaurantRouletteAppPage;

  beforeEach(() => {
    page = new RestaurantRouletteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

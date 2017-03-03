import { HotelOffersPage } from './app.po';

describe('hotel-offers App', function() {
  let page: HotelOffersPage;

  beforeEach(() => {
    page = new HotelOffersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

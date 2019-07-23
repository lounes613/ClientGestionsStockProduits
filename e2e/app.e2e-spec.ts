import { ClientGestionsStockProduitsPage } from './app.po';

describe('client-gestions-stock-produits App', function() {
  let page: ClientGestionsStockProduitsPage;

  beforeEach(() => {
    page = new ClientGestionsStockProduitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

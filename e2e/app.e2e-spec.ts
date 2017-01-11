import { AngularrxPage } from './app.po';

describe('angularrx App', function() {
  let page: AngularrxPage;

  beforeEach(() => {
    page = new AngularrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

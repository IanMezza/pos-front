import { PosFrontPage } from './app.po';

describe('pos-front App', () => {
  let page: PosFrontPage;

  beforeEach(() => {
    page = new PosFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

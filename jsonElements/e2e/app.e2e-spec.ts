import { JsonElementsPage } from './app.po';

describe('json-elements App', () => {
  let page: JsonElementsPage;

  beforeEach(() => {
    page = new JsonElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

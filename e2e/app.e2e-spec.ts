import { ChangedetectionAngularPage } from './app.po';

describe('changedetection-angular App', function() {
  let page: ChangedetectionAngularPage;

  beforeEach(() => {
    page = new ChangedetectionAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

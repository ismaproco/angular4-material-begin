import { AngularMaterialBeginPage } from './app.po';

describe('angular-material-begin App', () => {
  let page: AngularMaterialBeginPage;

  beforeEach(() => {
    page = new AngularMaterialBeginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

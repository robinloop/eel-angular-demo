import { EelAngularDemoPage } from './app.po';

describe('eel-angular-demo App', () => {
  let page: EelAngularDemoPage;

  beforeEach(() => {
    page = new EelAngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

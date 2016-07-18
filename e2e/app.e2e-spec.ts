import { ArrivalBoardPage } from './app.po';

describe('arrival-board App', function() {
  let page: ArrivalBoardPage;

  beforeEach(() => {
    page = new ArrivalBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

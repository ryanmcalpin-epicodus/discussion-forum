import { DiscussionForumPage } from './app.po';

describe('discussion-forum App', () => {
  let page: DiscussionForumPage;

  beforeEach(() => {
    page = new DiscussionForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

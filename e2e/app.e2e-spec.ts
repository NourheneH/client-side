import { ProjectClientPage } from './app.po';

describe('project-client App', function() {
  let page: ProjectClientPage;

  beforeEach(() => {
    page = new ProjectClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

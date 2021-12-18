import { FrontEndCadastroPage } from './app.po';

describe('front-end-cadastro App', () => {
  let page: FrontEndCadastroPage;

  beforeEach(() => {
    page = new FrontEndCadastroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

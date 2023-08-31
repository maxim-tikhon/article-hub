import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not logged in', () => {
    it('Open main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Open not existing page', () => {
      cy.visit('/fasfasfasf');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User is logged in', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Open profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Open articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});

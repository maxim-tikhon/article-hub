let profileId = '';

describe('Profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Profile is loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('Edit profile', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});

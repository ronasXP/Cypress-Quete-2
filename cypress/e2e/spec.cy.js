describe('Inscription réussie', () => {
  it('Successfull registration form', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('#firstName').type('Roan', { force: true });
    cy.get('#lastName').type('Foeline');
    cy.get('#signup-email').type('example121@email.com');
    cy.get('#signup-password').type('Romdom11');
    cy.get('[data-qa="signup-submit-button"]').click();
  });
  it('Failed registration', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('#firstName').type('Roan', { force: true });
    cy.get('#lastName').type('Foeline', { force: true });
    cy.get('#signup-email').type('example121email.com', { force: true });
    cy.get('#signup-password').type('Romdom11', { force: true });
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click({ force: true });
    cy.contains('p', 'Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre').should('be.visible');
  });

  it.only('Authentification', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('#signup-email').type('example121email.com', { force: true });
    cy.get('#signup-password').type('Romdom11', { force: true });
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click({ force: true });
  });
  
});

// modale.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

context('Lorem Ipsum', () => {
 beforeEach(() => {
        cy.visit('./../../components/tailwindcss-components/components/modal.html');
    });

    it('h2 should have text Lorem Ipsum', () => {
        cy.get('[data-cy=submit]').click()
        cy.get('body').click(0, 0);
        cy.get('[data-cy=h2Lorem]').should('have.text', 'Lorem Ipsum');
    });
}); 


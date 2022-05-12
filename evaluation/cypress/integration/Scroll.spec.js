// Scroll.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

context('Scroll', () => {
    beforeEach(() => {
           cy.visit('./../../components/tailwindcss-components/components/scroll-to-top.html');
       });
   
       it('Scroll', () => {
           //cy.get('[data-cy=submit-scroll]').click()
           cy.scrollTo(0,500);
           cy.get('[data-cy=submit-scroll-top]').should("be.visible")
           cy.get('[data-cy=submit-scroll-top]').click()
           cy.get('[data-cy=submit-scroll-top]').should("not.be.visible")
       });
       
   }); 
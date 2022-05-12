// SmartTag.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />
context('smartTag', () => {
    beforeEach(() => {
           cy.visit('./../../components/tailwindcss-components/components/smart-tag.html');
       });
   
       it('smartTag', () => {
           cy.get('[data-cy=tag]').trigger('mouseover');
           cy.get('[data-cy=tag-content]').should('be.visible');
           cy.get('body').click(0, 0);
           cy.get('[data-cy=tag-content]').should('not.be.visible');
       });
       
   }); 
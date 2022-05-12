// TodoList.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />
context('ToDo List', () => {
    beforeEach(() => {
           cy.visit('../../components/alpinejs-todolist/app/index.html');
       });
   
       it('ToDo List', () => {
           for (let index = 0; index < 5; index++) {
            cy.get('[data-cy=name-todo]').type('my to do'+index);
            cy.get('[data-cy=button-add-todo]').click();       
           }
           cy.get('div')
                .contains('my to do2')
                .parent()
                .find('button')
                .click();

           cy.get('[data-cy=item]').should('have.length',4)
                
       });
       
   }); 
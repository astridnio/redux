/// <reference types="cypress" />

context('Example 01', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Test#1', () => {
        cy.get('.new-todo').type("My long task#1(enter)");
        cy.get('.new-todo').type("My long task#2(enter)");
        cy.contains('Completed').click();
        cy.contains('Active').click();
    });
    it('Test #2', () => {
        //Nothing
    });
});

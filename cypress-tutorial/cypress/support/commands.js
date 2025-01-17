// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
import TodosPage from '../support/pages/TodosPage.js'
const todosPage = new TodosPage();

Cypress.Commands.add('AddTodo', (text) => {
    todosPage.newTodoInput().type(text + '{enter}');
});

Cypress.Commands.add('SelectAll', () => {
    todosPage.allLink().click();
});

Cypress.Commands.add('SelectActive', () => {
    todosPage.activeLink().click();
});

Cypress.Commands.add('SelectCompleted', () => {
    todosPage.completedLink().click();
});

Cypress.Commands.add('ToggleTask', id => {
    todosPage.todoToggle(id).click();
});

Cypress.Commands.add('GetTodoCount', () => {
    todosPage.todoCount();
});
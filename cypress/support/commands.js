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

/**
 *Abre a url cadastrada faz com que a aplicação aguarde ate o carregamento completo da pagina
 *@example OpenUrl();
 *@author Gabriel Carvalho
*/

Cypress.Commands.add('openUrl',() =>{
    cy.visit('https://blog.agibank.com.br');
    cy.waitUntil(() => cy.window().then(win => win.document.readyState === 'complete'));
    cy.get('.site-title').should('contain.text', 'Blog do Agi');
    cy.get('.slick-list.draggable').should('exist');
})

/**
 *Acessa o campo de Pesquisa e faz uma busca
 *@example Pesquisa('texto para pesquisa');
 *@author Gabriel Carvalho
*/
Cypress.Commands.add('pesquisa',(textoBusca) =>{
    cy.get('.ast-icon > .ahfb-svg-iconset').should('be.visible').click();
    cy.get('a .ast-icon.icon-search svg').click();
    cy.get('#search-field')
    .should('be.visible')
    .type(textoBusca)
    .type('{enter}')
})

/**
 *Valida busca realizada
 *@example validaBusca('texto que foi pesquisado');
 *@author Gabriel Carvalho
*/
Cypress.Commands.add('validaBusca',(textoBusca,palavraChave) =>{
    cy.url().should('include', palavraChave)
    cy.contains('Resultados encontrados para:')
    cy.contains(textoBusca)
})
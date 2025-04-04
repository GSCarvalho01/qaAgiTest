beforeEach(() => {
    cy.clearCookies(); 
    cy.clearLocalStorage();
    cy.openUrl();
})

afterEach(() => {
    cy.clearCookies(); 
    cy.clearLocalStorage();
  });

describe('Verificação do campo de busca e funcionalidades', () => {
    it('Verifica busca com palavra valida', () => {
        cy.pesquisa('Pix')
        cy.validaBusca('Pix','Pix')
        cy.get('#post-8933').should('exist');

    });

    it('Verifica busca com palavra invalida', () => {
        cy.pesquisa('1234')
        cy.validaBusca('1234','1234')
        //conrfirmação de retorno vazio
        cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.').should('be.visible')

    });

    it('Verifica busca com campo Vazio', () => {
        cy.pesquisa(' ')
        cy.get('#post-16157').should('exist');
        cy.url().should('include', '+')
    });

    it('Pesquisar e acessar matéria', () => {
        cy.pesquisa('GRRF')
        cy.get('#post-13725').should('exist').click()
        cy.url().should('include', 'grrf')
        cy.contains('GRRF: saiba o que é o guia, como calcular e como gerar documento')   
    });
});


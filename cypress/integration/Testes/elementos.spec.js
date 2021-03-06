/// <reference types="cypress"/>

//busca genérica, verificando se na página por completo existe o texto 'Cuidado'
describe ('Utilizando elementos básicos', () => {
    it('Textos', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html') 
        //Filtro na página body toda
        cy.get('body').should('contain', 'Cuidado')
        //cy.get('body').should('have.text', 'Cuidado') - Não Funciona
        //filtro na tag span
        cy.get('span').should('contain', 'Cuidado')
        //cy.get('div').should('contain', 'Cuidado') - Não funciona
        //filtro somente tag span com classe expecífica
        cy.get('.facilAchar').should('contain', 'Cuidado')
        //have.textIdentifica exatamente o texto do campo que está na classe, não aceitando texto incompleto, tem que estar igual da o da classe
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })
        //Links
      it.only('links', () => {
          cy.visit('https://wcaquino.me/cypress/componentes.html') 
                  
          cy.get('[href="#"]')
          .click()
          
          cy.get('#resultado')
          .should('have.text','Voltou!')
          
          //Atualiza a página
          cy.reload ()
          
          //Não contem o texto voltar
          cy.get('#resultado')
          .should('have.not.text','Voltou!')
          
          
          //Usando cy.get ou cy.contains
          cy.contains('Voltar').click()

          cy.get('#resultado')
          .should('have.text','Voltou!')
      })
})

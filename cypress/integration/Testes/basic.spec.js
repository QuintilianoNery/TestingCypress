/// <reference types="cypress"/>


describe('Cypress basico', () =>{
    it ('Visitar o site e verificar o título', () => {
       cy.visit('https://wcaquino.me/cypress/componentes.html') 

       //Fiz duas vezes
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        //Fiz uma vez apenas
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

            //TODO escrever o log no console
            //TODO escrever o log em um campo de texto
    })

    //.only executa apenas este teste
    it.only('interagindo com um elemento', ( ) => {
       cy.visit('https://wcaquino.me/cypress/componentes.html') 
       //neste não vai executar nada pois não existe nenhum objeto com este nome.
       //cy.get('#teste')

       //Ação utilizando cy.get('#')
       ///.click() executa a ação de clicar.
       cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')


    })

}) 



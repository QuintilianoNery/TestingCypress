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
}) 



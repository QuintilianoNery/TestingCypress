/// <reference types="cypress"/>

//Lista de testes
describe('Cypress basico', () =>{
    //1º  teste aula 7
    it('Visitar o site e verificar o título', () => {
        //Primeiro comando para visitar uma página
       cy.visit('https://wcaquino.me/cypress/componentes.html') 


        //Posso fazer assim
            //Fiz duas vezes
            //cy.title().should('be.equal', 'Campo de Treinamento')
            //cy.title().debug().should('contain', 'Campo')

        //Ou assim

            //Método do Cypress para pegtar o título da página, caso não consiga encontrar, colocar um texto aleatório no "Campo de treinamento" que no errmo mostrará o nome da página
            
            

        //Pausa a execução até mandar parar cy.pause()
        cy.pause()
        //##Comando .debug() é utilizado para pegar mais detalhes sobre um ponto

            cy.title()
                .should('be.equal', 'Campo de Treinamento')
                .and('contain', 'Campo')
            //TODO escrever o log no console
            //TODO escrever o titulo em um campo de texto
    })

    //2º teste aula 8
    //.only executa apenas este teste
    it('interagindo com um elemento', ( ) => {
       cy.visit('https://wcaquino.me/cypress/componentes.html') 
       //neste não vai executar nada pois não existe nenhum objeto com este nome.
       //cy.get('#teste')

       //Ação utilizando cy.get('#')
       ///.click() executa a ação de clicar.
       cy.get('#buttonSimple')
            .click()
            //acertiva, este botão deve possuir o valor Obrigado
            .should('have.value', 'Obrigado!')
    })
}) 



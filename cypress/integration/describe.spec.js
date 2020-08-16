/// <reference types="cypress"/>

//only - executar apenas o teste ou o grupo de teste
//skip - é para não executar um teste ou um grupo de testes
//Only - vai ser executado apenas o ultimo que for encontrado, não podendo executar em dois lgares apenas
// skip - pode-se configurar em vários lugares
it('Teste externo...', () =>{

})

describe('Grupo de teste...', ( ) =>{
    describe('subgrupo de testes específicos...', () => {

        it('Teste específico do subgrupo...', () =>{
        })
    })
    describe('subgrupo de testes específicos 2...', () => {

        it.only('Teste específico do subgrupo 2...', () =>{
        })
    })

    it.skip('Teste interno...', () =>{

    })
})
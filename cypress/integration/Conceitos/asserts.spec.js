/// <reference types="cypress"/>

//Igualdade entre variáveis simples, números e strings
it('Igualdade', () =>{
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

//Bloco de teste que verifica se é verdadeiro ou não
it ('Veracidade', () => {
    const a = true;
    const b = null;
    let c;



    expect(a, 'Espera-se verdadeiro').to.be.true;
    expect(true, 'Espera-se verdadeiro').to.be.true;
    expect(b,'Espera-se nulo').to.be.null;
    expect(a, 'Espera-se não nulo').to.be.not.null;
    expect(c,'Espera-se não definido').to.be.undefined;
})

//Bloco de teste da equalidade de objetos
it('Equalidade de objetos', ( ) => {
    const obj = {
        a: 1,
        b: 2
    }
    expect(obj).eq(obj)
    expect(obj).equal(obj)
    expect(obj).to.be.equals(obj)
    //deep verifica as propriedades do objeto
    expect(obj).to.be.deep.equal({a:1, b:2})
    //maneira mais simples
    expect(obj).eql({a:1, b:2})
    //Objeto muito grande, verificar se existe alguma propriedade no objeto
    expect(obj).include({a:1})
    //Ir dideto na propriedade do objeto
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    //verificar se o objeto não está vazio
    expect(obj).to.not.be.empty
    //verificar se está vazio
    expect({}).to.be.empty
})

//Acertivas com arrays

it('Array', () => {
    const arr = [1,2,3]
    //verificar se o array possui os membros 123
    expect(arr).to.have.members([1,2,3])
    //verificalr alguns membros
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

//Checar a nível de tipos
it('Tipos', () =>{
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

//Outros tipos de checagens em strings
it('String', () =>{
    const str = 'String de teste'
    
    expect(str).to.be.equal('String de teste')
    //verificar tamanho da string de 15 caracteres
    expect(str).to.have.length(15)
    //pegar um pedaço da string
    expect(str).to.contains('de')
    //^ siguinifica que deve iniciar com
    //deve iniciar com
    expect(str).to.match(/^String/)
    //deve finalizar com
    expect(str).to.match(/teste$/)
    //tamanho
    expect(str).to.match(/.{15}/)
    //Existem apenas letras
    expect(str).to.match(/\w+/)
    //não contem números
    expect(str).to.match(/\D+/)
})

//verificação a nível de números
it ('Números', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    //maior que 3
    expect(number).to.be.above(3)
    //menor que 7
    expect(number).to.be.below(7)

    //número flutuante
    expect(floatNumber).to.be.equal(5.2123)
    //expero que o número float seja próximo de
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
    expect(floatNumber).to.be.above(5)




})









/* it('Teste externo...', () =>{

})

describe('subgrupo de testes específicos...', () => {
    it('Teste específico do subgrupo...', () =>{
    })
}) */
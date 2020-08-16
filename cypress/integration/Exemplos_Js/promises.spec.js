it ('sem testes ainda', ( ) => {})


//Interpolação
//Conceito de assincronicidade, é quando eu dependo de uma resposta demorada de um  BD ou de uma API para ter um resultado
const getSomethig = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (13);
        }, 1000)
    })
}

    const system = () => {
    console.log('init');
    getSomethig().then(some =>{
        console.log (`Something is ${some}`)
    })
    
    console.log('end')
} 

//Ou assim - Modo antigo de se usar callback, o mais atual é usando promices
/*const system = () => {
    console.log('init');
    getSomethig(some => {
        console.log(`Something is ${some}`);
        console.log('end');
    })
} */

system();
it('sem testes, ainda', () => { })

// const getSomething = () => 10;

// const getSomething = () => {
//     setTimeout(() => {
//         return 1;
//     }, 1000) //esse "1000" indica que o método demorará 1k milisegundos para responder, ou seja, simula uma chamada a um endpoint que leva um tempo para obter a resposta
// }

// const system = () => {
//     console.log('init');
//     const something = getSomething();
//     console.log(`Something is ${something}`);
//     console.log('end')
// }



//Alternativa para forma assíncrona, porém há problema quando muitos callbacks são criados

// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init');
//     getSomething( some => {
//         console.log(`Something is ${some}`)
//         console.log('end');
//     })
// }



const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12);
        }, 1000)
    })
    
}

//forma mais atual utilizando promisses para trechos assíncronos
// const system = () => {
//     console.log('init');
//     const prom = getSomething();
//     prom.then(some => {
//         console.log(`Something is ${some}`);
//         console.log('end')
//     })
// }

//ainda melhor (como o getSomething retorna uma promisse, pode chamar o then diretamente): 
const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`);
        console.log('end')
    })
}
system();


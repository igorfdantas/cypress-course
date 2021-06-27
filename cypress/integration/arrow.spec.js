/// <reference types="cypress"/>

it ('nada ainda', function(){})
//Note: Alguns exemplos de uso do Arrow "=>" e no final, exemplo que o arrow não funciona devido o "this" que não vê o contexto
// function soma(a,b){
//     return a+b;
// }

// const soma = function (a, b){
//     return a+b
// }


// const soma = (a, b) => {
//     return a+b
// } 

// const soma = (a,b) => a + b

// const soma = (a, b) => {
//     return a + b;
// }

// const soma = (a) => a + a

const soma = a => a + a
console.log(soma(8,2))

it ('a function test... ', function () {
    console.log('Function', this)
})


it ('an arrow test... ', () => {
    console.log('Arrow', this)
})
/// <reference types="cypress"/>

//.debug() após um elemento mostra detalhadamente no console do cypress o que está ocorrendo
//.pause() executa os comandos um por vez

describe('Cypress basics', () => {
  it.only('Should visit a page and assert title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    //const title = cy.title()
    //console.log(title)

    //cy.pause()

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')//.debug()

    //outra forma(reduz uma busca de titulo):
    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .should('contain', 'Campo')
      
      //outra forma com melhor legibilidade
      cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
  })
  
  it('Should find and interact with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
      .click()
      .should('have.value', "Obrigado!")
  })


})
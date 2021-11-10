/// <reference types="cypress" />

describe("Esperas...", () => {
    //before all (executa uma unica vez antes de todos os testes)
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()//Para dar um refresh na pagina
  })

  it('Deve aguardar elemento estar disponível', () => {
    cy.get('#novoCampo').should('not.exist')
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo').should('not.exist')
    cy.get('#novoCampo').should('exist')
    cy.get('#novoCampo').type('funciona')
  })

  it.only('Deve fazer retrys', () => {
    cy.get('#buttonDelay').click()
    cy.get('#novoCampo')
        .should('not.exist')
        .type('funciona')
  })
  
})
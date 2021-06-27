/// <reference types="cypress"/>

describe('Work with basic elements', () => {
  //before all (executa uma unica vez antes de todos os testes)
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()//Para dar um refresh na pagina
  })
  
  it('Text', () => {
    //cy.get('body').should('contain','Cuidado')//muito genérica
    //cy.get('span').should('contain','Cuidado')
    
    cy.get('.facilAchar').should('contain', 'Cuidado')
  })

  it('Links', () => {
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
    cy.reload()
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')
  })    

})
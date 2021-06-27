/// <reference types="cypress"/>

//it.only('A external test... ', () => {})

describe('Should be a group tests...', () => {
  describe('Should group more specific tests...', () => {
    it('A specific test... ', () => {

    })
  })
  
  it.skip('A test skiped... ', () => {

  })

  it('A internal test... ', () => {

  })  
})

describe.skip('Skiped group tests...', () => {
  describe('Should group more specific tests...', () => {
    it('A specific test... ', () => {

    })
  })

  it.skip('A test skiped... ', () => {

  })

  it('Only this internal test... ', () => {

  })
})
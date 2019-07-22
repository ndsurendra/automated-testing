/// <reference types="Cypress" />

context('Misc', () => {
    beforeEach(() => {
      cy.visit('https://ragavendra2018-3.herokuapp.com/')
    })
  
    it('should have the link to home page', () => {
        cy.get('#home-link').should('contain.text', 'Home');
    })

    it('should have the link to about page', () => {
        cy.get('#about-link').should('contain.text', 'About');
    })

    it('should have the link to todos page', () => {
        cy.get('[routerlink="/todos"]').should('contain.text', 'Todos');
    })

    it('should have the link to Stopwatch page', () => {
        cy.get('[routerlink="/stopwatch"]').should('contain.text', 'Stopwatch');
    })

  })
  
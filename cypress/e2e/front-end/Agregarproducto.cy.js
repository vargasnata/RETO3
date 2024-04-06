/// <reference types="cypress" />

describe('Seleccionar y agregar un producto al carrito', () => {
it('TC-001: NA | Seleccionar y agregar un producto al carrito', () => {
    cy.visit('http://www.testingyes.com/onlineshop/')
    cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
    cy.get('.add > .btn').click();
    cy.get('.close > span > .material-icons').click();
    cy.get('.blockcart').click();
    cy.log('se agrega producto correctamente al carrito de compras') 
  })
 
});
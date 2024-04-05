/// <reference types="cypress" />

describe('Cart feature', () => {
it('TC-001: FE | Add new product to cart', () => {
    cy.visit('http://www.testingyes.com/onlineshop/')
    cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
    cy.get('.add > .btn').click();
    cy.get('.close > span > .material-icons').click();
    cy.get('.blockcart').click();
    cy.log('se agrega producto correctamente al carrito de compras') 
  })
 
});
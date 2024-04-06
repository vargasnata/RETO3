describe('Eliminar producto del carrito de compras', () => {
    it('TC-002: NA | Eliminar producto del carrito de compras', () => {
        cy.visit('http://www.testingyes.com/onlineshop')
        cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('.add > .btn').click();
        cy.get('.close > span > .material-icons').click();
        cy.get('.blockcart').click();
        cy.get('.remove-from-cart > .material-icons').click();
        cy.get('.blockcart').click();
        cy.log('se elimina producto correctamente del carrito de compras') 
        
      })
     
    });
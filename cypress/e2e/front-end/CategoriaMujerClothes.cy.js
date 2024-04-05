describe('Seleccionar la categoria y filtrar solo por productos de Mujer', () => {
    it('TC-004: NA | Seleccionar la categoria y filtrar solo por productos de Mujer', () => {
        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('.category-sub-menu > :nth-child(2) > a').click();
        cy.log('Estos son todos los productos de Mujer disponibles') 
      })
    });
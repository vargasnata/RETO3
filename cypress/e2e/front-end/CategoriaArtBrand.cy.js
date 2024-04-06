describe('Seleccionar la categoria y filtrar solo por productos de Mujer', () => {
    it('TC-005: NA | Seleccionar la categoria y filtrar solo por productos de Mujer', () => {
        cy.visit('http://www.testingyes.com/onlineshop/')
        cy.get('#category-9 > .dropdown-item').click();
        cy.log('se observa todos la categoria de articulos') 
      })
    });
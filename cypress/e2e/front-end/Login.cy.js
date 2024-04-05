describe('Logearse', () => {
    it('TC-003: FE |login ', () => {
        cy.visit('http://www.testingyes.com/onlineshop')
        cy.get('a > .hidden-sm-down').click();
        cy.get('.col-md-6 > .form-control').type('ylatanvargasr@gmail.com')
        cy.get('.input-group > .form-control').type('Nata.1234')
        cy.get('#submit-login').click();
        cy.log('¡Inicio de sesión exitoso!') 
      })
     
    });
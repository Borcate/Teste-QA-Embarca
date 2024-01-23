class testes {

busca_por_rota1(){
    cy.get(':nth-child(1) > .home-input').type('CAIOBA')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('[data-id="1"]').click()

        cy.get(':nth-child(4) > .home-input').type('MATINHOS')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('[data-id="0"]').click()

        cy.get(':nth-child(5) > .home-input').click()
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .next').click({ force: true })
        cy.get('[data-date="1707350400000"]').click()
        cy.get('#search-trips-btn').click()
        //Selecionar viagem
        //Seleção de poltrona
        cy.get(':nth-child(1) > .header > .justify-content-center > .col-lg-8 > .col-lg-12 > #new_reservation > .btn').click()
        cy.get('[data-number="1"]').click()
        cy.get('#next-button').click({ force: true })
        //Dados do passageiro
        //cy.get('#order_reservations_attributes_0_seats_attributes_0_name').type('Lucas Benício Monteiro')
        //cy.get('#order_reservations_attributes_0_seats_attributes_0_rg').type('15.569.007-3')
}

busca_por_rota2(){
    cy.get(':nth-child(1) > .home-input').type('MATINHOS')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('[data-id="0"]').click()

        cy.get(':nth-child(4) > .home-input').type('CAIOBA')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('[data-id="1"]').click()

        cy.get(':nth-child(5) > .home-input').click()
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(2) > .next').click({ force: true })
        cy.get('[data-date="1707350400000"]').click()
        cy.get('#search-trips-btn').click()
        //Selecionar viagem
        //Seleção de poltrona
        cy.get(':nth-child(1) > .header > .justify-content-center > .col-lg-8 > .col-lg-12 > #new_reservation > .btn').click({ force: true })
        cy.get('[data-number="1"]').click()
        cy.get('#next-button').click({ force: true })
        //Dados do passageiro
        //cy.get('#order_reservations_attributes_0_seats_attributes_0_name').type('Lucas Benício Monteiro')
        //cy.get('#order_reservations_attributes_0_seats_attributes_0_rg').type('15.569.007-3')
}

}
export default new testes()
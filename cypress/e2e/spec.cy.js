describe('Home Page E2E Test', () => {
    it('loads home page and increments counter', () => {
        cy.visit('http://localhost:5173')

        // Title exists
        cy.contains('Testing Demo').should('exist')

        // Counter initial value
        cy.contains('Count: 0').should('exist')

        // Click increment
        cy.contains('Increment').click()

        // Check increment
        cy.contains('Count: 1').should('exist')
    })
})

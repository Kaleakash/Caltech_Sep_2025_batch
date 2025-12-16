describe('Http Module test', () => {
    it("Sample Page Open" , () => {
        cy.visit("http://127.0.0.1:5500/login.html")
        cy.get("#heading").should("have.text","Welcome to Cypress Testing App!")
        //cy.contains("Welcome to Http Module")
    })
})
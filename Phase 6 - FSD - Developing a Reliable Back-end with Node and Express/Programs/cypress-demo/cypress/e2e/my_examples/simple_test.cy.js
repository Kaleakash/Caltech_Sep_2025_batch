describe('My First Test', () => {
    it("Sample Page Open" , () => {
        cy.visit("https://www.google.com")
        cy.contains("Google")
    })
})
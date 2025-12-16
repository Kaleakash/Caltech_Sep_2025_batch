describe('Http Module test', () => {
    
    beforeEach(()=> {
        cy.visit("http://127.0.0.1:5500/login.html")
    })
    
    it("Login Page heading present" , () => {
        cy.get("#heading").should("have.text","Welcome to Cypress Testing App!")
    })

    it("User Name is required" , () => {
        cy.get('#b1').click();
        cy.get("#msg").should("have.text","user name is required")
    })

    it("Password is required" , () => {
        cy.get("#emailid").type("john@gmail.com")   // we type using cypress emailId 
        cy.get('#b1').click();
        cy.get("#msg").should("have.text","password is required")
    })

    it("Invalid login details" , () => {
        cy.get("#emailid").type("john@gmail.com")   // we type using cypress emailId 
        cy.get("#password").type("john123")
        cy.get('#b1').click();
        cy.get("#msg").should("have.text","failure try once again")
    })

     it("success login details" , () => {
        cy.get("#emailid").type("admin@gmail.com")   // we type using cypress emailId 
        cy.get("#password").type("admin@123")
        cy.get('#b1').click();
        cy.get("#msg").should("have.text","successfully login")
    })
})
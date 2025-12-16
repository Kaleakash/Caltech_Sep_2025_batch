describe('Http Module test', () => {
    
    beforeEach(()=> {
        cy.visit("http://localhost:3000/login")
    })
    
    it("Login Page heading present" , () => {
        //cy.get("#heading").should("have.text","Welcome to Cypress Testing App!")
        cy.contains("Login Page")
    })
    it("Login with valid emailId and password" , () => {
        //cy.get("#heading").should("have.text","Welcome to Cypress Testing App!")
        cy.get("input[type='email']").eq(0).type("john@gmail.com");
        cy.get("input[type='password']").type("john@123")
        cy.get("input[type='submit']").click();
        cy.contains("Successfully login john@gmail.com")
    })
    it("Login with invalid emailId and password" , () => {
        //cy.get("#heading").should("have.text","Welcome to Cypress Testing App!")
        cy.get("input[type='email']").eq(0).type("john@gmail.com");
        cy.get("input[type='password']").type("john@1236")
        cy.get("input[type='submit']").click();
        cy.contains("failure try once again")
    })
    xit("signUp functionality ",()=> {
        cy.get("a[href='signUp']").click()
        cy.get("input[type='email']").eq(0).type("john@gmail.com");
        cy.get("input[type='password']").type("john@123")
        cy.get("input[type='submit']").click();
        cy.contains("Account created successfully")    
    })
})
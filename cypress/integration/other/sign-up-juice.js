/// <reference types='Cypress' />

describe('Sign up', () => {
    var email = Math.random().toString(36).substring(2) + "@gmail.com"
    var password = "Password1"
    var securityAnswer = "Hello World"


    describe('UI Tests', () => {



        it('User is able to sign up from homepage', () => {
            // Get to the login form
            cy.visit('localhost:3000')
            cy.get('[aria-label="Close Welcome Banner"]').click()
            // close outside banner
            // cy.get('.cdk-overlay-backdrop').click(-50,-50, {force: true})
            cy.get('#navbarAccount').click()
            cy.get('#navbarLoginButton').click().then(() => {
                cy.url().should('contain', 'login')
            })
            cy.get('#newCustomerLink').click().then(() => {
                cy.url().should('contain', 'register')
            })
            // Populate form


            cy.get('#emailControl').type(email)
            cy.get('#passwordControl').type(password)
            cy.get('#repeatPasswordControl').type(password)

            cy.get('[role="combobox"]').click().then(() => {
                cy.get('.mat-option-text').contains(" Mother's maiden name? ")
                    .click()
            })
            cy.get('#securityAnswerControl').type(securityAnswer).then(() => {
                cy.get('#registerButton').should('not.have.a.property', "disabled='true'")
            }).then(() => {
                cy.get('#registerButton').click()
            })

            cy.get('snack-bar-container').should("contain", "Registration completed successfully.")
        })

        it('Login user with provided credentials', () => {
            cy.url().should('contain', 'login')
            cy.get('#email').type(email)
            cy.get('#password').type(password)

            cy.get('#loginButton').should('not.have.a.property', "disabled='true'")
            cy.get('#loginButton').click()

            cy.url().should('contain', 'search')
            cy.get('#navbarAccount').click()
            cy.get('[aria-label="Go to user profile"]').should('contain', email)
        })
    })
    describe('API Tests', () => {
        const userCredentials = {
            "email": email,
            "password": password
        }
        it("Login via API and simulate and assert weather the server has responded with 200 code", () => {


            // cy.request("POST", "http://localhost:3000/rest/user/login", userCredentials).then((response) => {
            //     expect(response.status).to.equal(200)
            // })

            cy.request({
                method: "POST",
                url: "http://localhost:3000/rest/user/login",
                body: {
                    "email": "zibhfyxpdu@gmail.com",
                    "password": "Password1"
                }
            }).then((response) => {
                expect(response.status).to.equal(200)
            })

        })

        it("Login via Token", () => {
            cy.request("POST", "http://localhost:3000/rest/user/login", userCredentials).its('body').then((body) => {
                const token = body.authentication.token
                cy.wrap(token).as("userToken")

                const userToken = cy.get("@userToken")
                cy.visit('localhost:3000', {
                    onBeforeLoad(browser) {
                        browser.localStorage.setItem("token", userToken)
                    }
                })
                cy.wait(2000)
                cy.get('.cdk-overlay-backdrop').click(-50, -50, {
                    force: true
                })
                cy.get('.fa-layers-counter').contains(0)
            })
        })
    })
})
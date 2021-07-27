/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {

    it("Navigating to specific product pages", () => {

        cy.visit('https://automationteststore.com')
        //cypress code

        // NOT RECOMMENDED  - This code will pass - order of execution is not guaranteed

        /*const makeupLink = cy.get("a[href*= 'product/category&path=']").contains("Makeup")
        makeupLink.click()
        const skincareLink = cy.get("a[href*= 'product/category&path=']").contains("Skincare")
        skincareLink.click()*/


        // NOT RECOMMENDED  -  This code will fail because of order of execution - order of execution is not guaranteed

        /* const makeupLink = cy.get("a[href*= 'product/category&path=']").contains("Makeup")
        const skincareLink = cy.get("a[href*= 'product/category&path=']").contains("Skincare")
        makeupLink.click()
        skincareLink.click()*/


        // This is reccommended way

        cy.get("a[href*= 'product/category&path=']").contains("Makeup").click()
        cy.get("a[href*= 'product/category&path=']").contains("Skincare").click()

    })

    it("Navigating to specific product pages", () => {

        cy.visit('https://automationteststore.com')
        //cypress code

        cy.get("a[href*= 'product/category&path=']").contains("Makeup").click()

        // Following code will fail
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })

    })

    it.only("Validacte properties of the Contact Us Page", () => {

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        //cypress code

        // Uses cypress commands and chaining - Is there a form and form header inside it
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //  JQuery approach

        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            // Embeded commands (Closure)

            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)

            })

        })

    })

})
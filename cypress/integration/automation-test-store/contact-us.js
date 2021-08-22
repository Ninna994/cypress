/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    before(() => {
        // cy.fixture('userDetails.json').then(function (data) {
        //     // this.data = data
        //     globalThis.data = data
        // })
        cy.viewport(550, 750)
        cy.fixture('userDetails.json').as("user")
    })
    it.only("HAPPY PATH - Should be able to submit a successful submission via contact us form", () => {
        Cypress.currentTest.retries(4)
        cy.visit("https://automationteststore.com/")

        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        //  BY XPATH
        // cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get("a[href$= 'contact555']").click().then(function (linkText) {
            cy.log("This is a link text: " + linkText.text())
        })

        cy.get('#ContactUsFrm_first_name').type("Nikolina")
        cy.get('#ContactUsFrm_email').type("inanikolina@gmail.com")

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type("Iskreno ne znam zasto opet radim jedno te isto")

        // cy.get('.col-md-6 > .btn').click()
        // BY CSSs Selector
        cy.get('button[title = "Submit"]').click()

        // Assertions

        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log("Test has completed!")
        console.log("Test has completed");

    })

    it("HAPPY PATH - from fixtures Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$= 'contact']").click().then(function (linkText) {
            cy.log("This is a link text: " + linkText.text())
        })

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })



        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        //  BY XPATH
        // cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get("a[href$= 'contact']").click().then(function (linkText) {
            cy.log("This is a link text: " + linkText.text())
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type("Iskreno ne znam zasto opet radim jedno te isto")

        // cy.get('.col-md-6 > .btn').click()
        // BY CSSs Selector
        cy.get('button[title = "Submit"]').click()

        // Assertions

        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log("Test has completed!")
        console.log("Test has completed");

    })
})
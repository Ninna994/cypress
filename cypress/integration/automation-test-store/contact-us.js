/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {

    it("HAPPY PATH - Should be able to submit a successful submission via contact us form", () => {

        cy.visit("https://automationteststore.com/")

        // cy.get('.info_links_footer > :nth-child(5) > a').click()
        //  BY XPATH
        // cy.xpath('//a[contains(@href, "contact")]').click()
        cy.get("a[href$= 'contact']").click()

        cy.get('#ContactUsFrm_first_name').type("Nikolina")
        cy.get('#ContactUsFrm_email').type("inanikolina@gmail.com")

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type("Iskreno ne znam zasto opet radim jedno te isto")

        // cy.get('.col-md-6 > .btn').click()
        // BY CSSs Selector
        cy.get('button[title = "Submit"]').click()

        // Assertions

        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

    })
})
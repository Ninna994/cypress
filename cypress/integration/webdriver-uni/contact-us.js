/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    it.only("HAPPY PATH - Should be able to submit a successful submission via contact us form", () => {

        //cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us > .thumbnail').click()
        // cy.get('#contact-us').click({
        //     force: true
        // })

        cy.get('[name="first_name"]').type("Nikolina")
        cy.get('[name="last_name"]').type("Djekic")
        cy.get('[name="email"]').type("inanikolina@gmail.com")
        cy.get('[name="message"]').type("Ovo je poruka koju zelim da posaljem svima i da testiram o ceku se ovde radi")

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').type("Milos")
        cy.get('[name="last_name"]').type("Djekic")
        cy.get('[name="email"]').type("milos.djekic94@gmail.com")
        cy.get('[name="message"]').type("Ovo je poruka koju zelim da posaljem svima i da testiram o ceku se ovde radi")

        cy.get('[type="submit"]').click()

    })

    it("SAD PATH - Should not be able to submit a successfull submission via contact us form  as all fields are required", () => {

        //cypress code
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get('[name="first_name"]')
        cy.get('[name="first_name"]').type("Nikolina")
        cy.get('[name="last_name"]').type("Djekic")
        // cy.get('[name="email"]').type("inanikolina@gmail.com")
        cy.get('[name="message"]').type("Ovo je poruka koju zelim da posaljem svima i da testiram o ceku se ovde radi")

        cy.get('[type="submit"]').click()

    })
})
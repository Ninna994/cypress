/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    it.only("Log information of each Hair Care of the products", () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Click on specific product and add it to basket", () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click()
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes('Curls to straight Shampoo')) {

                cy.wrap($el).click().then(() => {
                    cy.get('.cart').click()
                })
            }
        })

    })



})
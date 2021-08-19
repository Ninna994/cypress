/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click()
    })

    it("Log information of each Hair Care of the products", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it("Click on specific product and add it to basket", () => {

        cy.selectProduct('Curls to straight Shampoo')

    })

    it.only("Click on specific product and add it to basket", () => {
        cy.selectProduct('Seaweed Conditioner')

    })



})
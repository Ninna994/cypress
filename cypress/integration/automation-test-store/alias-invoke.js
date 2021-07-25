/// <reference types="Cypress" />

describe("Alias and Invoke usage", () => {

    it("Validate a specific haircare product", () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productHeaderText')
        cy.get('@productHeaderText').its('length').should('be.gt', 5) // be.gt - be greater then
        cy.get('@productHeaderText').should('include', 'Seaweed Conditioner')



    })

    it.only("Validate the number of products on home page in featured section", () => {

        cy.visit('https://automationteststore.com')

        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)


        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')





    })


})
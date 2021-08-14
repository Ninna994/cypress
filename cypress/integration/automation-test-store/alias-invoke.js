/// <reference types="Cypress" />

describe("Alias and Invoke usage", () => {

    it("Validate a specific haircare product", () => {

        cy.visit('https://automationteststore.com')
        cy.get("a[href*= 'product/category&path=']").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productHeaderText')
        cy.get('@productHeaderText').its('length').should('be.gt', 5) // be.gt - be greater then
        cy.get('@productHeaderText').should('include', 'Seaweed Conditioner')

    })

    it("Validate the number of products on home page in featured section", () => {

        cy.visit('https://automationteststore.com')

        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)

        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')

    })

    it.only("Calculate total of normal and sale products", () => {

        cy.visit('https://automationteststore.com')

        // standard price counting

        cy.get(".thumbnail").as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;

        // non sale items
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0
            // split array by $ sign
            var itemPrice = $linkText.split('$')
            // index
            var i
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
                // cy.log(itemsPriceTotal)
            }
            itemsTotal += itemsPriceTotal
            cy.log("Non sale price items total: " + itemsTotal)
        })

        // sale items and their price
        cy.get('@saleItemPrice').then($linkText => {
                var saleItemsPriceTotal = 0
                // split array by $ sign
                var saleItemPrice = $linkText.split('$')
                // index
                var i
                for (i = 0; i < saleItemPrice.length; i++) {
                    cy.log(saleItemPrice[i])
                    saleItemsPriceTotal += Number(saleItemPrice[i])
                }
                itemsTotal += saleItemsPriceTotal
                cy.log("Sale price items total: " + saleItemsPriceTotal)
            })
            // after doing code above do code bellow
            .then(() => {
                cy.log("The total price of all products: " + itemsTotal)
                expect(itemsTotal).to.equal(616.7)
            })

    })


})
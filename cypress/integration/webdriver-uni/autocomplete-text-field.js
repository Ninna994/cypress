/// <reference types='Cypress' />

describe('Verify autocomplete dropdown lists via webdriveruniversity', () => {

    it('Select specific product via autocomplete list', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({
            force: true
        })

        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').as('listItems')
        cy.get('@listItems').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'

            if (prod === productToSelect) {
                // $el.click() DEPRECATED
                $el.trigger("click")
                cy.get('#submit-button').click()
                cy.url().should('include', 'Avacado')
            }

        })


    })

})
/// <reference types='Cypress' />

describe('Validate webdriveruni homepage links', () => {

    it.only('Confirm that links redirect to the correct pages', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({
            force: true
        })
        // validate that we are on contact us page
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()

        cy.go('forward')
        cy.url().should('include', 'contactus')


        cy.go('back')
        cy.get('#button-clicks').invoke('removeAttr', 'target').click({
            force: true
        })
        cy.url().should('include', 'Click-Buttons')

        cy.go('back')

    })

    it('', () => {

    })

})
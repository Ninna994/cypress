/// <reference types='Cypress' />

describe('Cypress web security', () => {

    it('Validate navigating to two different superdomains', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.visit('http://automationteststore.com')
    })

    it.only('Validate if button opens new superdomain in new tab', () => {
        cy.visit('http://webdriveruniversity.com')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

})
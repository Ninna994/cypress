/// <reference types='Cypress' />

describe('Verify radio buttons via webdriveruniversity', () => {

    it('Check radio button and validate it is checked', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({
            force: true
        })
        // cy.get('[value="green"]').check().should('be.checked')
        cy.get('#radio-buttons').find('input[type="radio"]').first().check()
        cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check()


    })

    it.only('Validate state of radio buttons', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({
            force: true
        })

        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')
    })

})
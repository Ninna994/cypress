/// <reference types='Cypress' />

describe('Verify radio buttons via webdriveruniversity', () => {
    before(() => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({
            force: true
        })
    })
    it('Check radio button and validate it is checked', () => {
        // cy.get('[value="green"]').check().should('be.checked')
        cy.get('#radio-buttons').find('input[type="radio"]').first().check()
        cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check()


    })

    it('Validate state of radio buttons', () => {
        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')
    })

})
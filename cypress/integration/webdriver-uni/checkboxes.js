/// <reference types='Cypress' />

describe('Verify checkboxes via webdriveruni', () => {
    beforeEach(() => {
        cy.navigateToWebdriverUniHomepage()
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({
            force: true
        })
    })

    it('Check and validate checkbox', () => {
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        // cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })

    it('Uncheck option taht is checked by default', () => {


        cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it('Check multiple checkboxes', () => {

        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3"]).should('be.checked')

    })

    /* === Test Created with Cypress Studio === */
    it('Click on all radio buttons', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        cy.get('[value="purple"]').check();
        /* ==== End Cypress Studio ==== */
    });
})
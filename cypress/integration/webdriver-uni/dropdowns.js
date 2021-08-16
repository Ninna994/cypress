/// <reference types='Cypress' />

describe('Interact with dropdown lists', () => {

    it('Select specific values via select dropdown', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({
            force: true
        })

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('javascript').contains('JavaScript')

    })

})
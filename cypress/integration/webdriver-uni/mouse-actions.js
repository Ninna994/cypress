/// <reference types='Cypress' />

describe('Test mouse actions', () => {

    it('Scroll elements into view', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({
            force: true
        })

    })


})